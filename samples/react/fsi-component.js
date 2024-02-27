class FSIComponent extends React.Component {

  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  getIgnoredProps = function(){
    return {
      "children":1,
      "style":1,
      "id":1,
      "data-fsi-id":1
    }
  }

  getDefaultParameters(){
    return {
      ref:this.ref,
      autoInit:false,
      skin:"black-flat"
    }
  }

  destroyInstance(){
    const instance = this.ref.current;

    if (typeof instance.getInitDone !== "function" || instance.getInitDone() === true) {
      if (typeof instance.destroy === "function")
        instance.destroy();
    }
  }

  initInstance(){
    const instance = this.ref.current;
    if (typeof(instance.init) === "function" && instance.init(instance, this.getParameters()) === true){
      if (typeof instance.start === "function") {
        instance.start();
      }
    }
  }


  getParameters(){
    return {...this.getDefaultParameters(), ...this.props, ...{tagName:null}}
  }

  /* handlers */
  componentWillUnmount() {
    this.destroyInstance();
  }


  shouldComponentUpdate(nextProps){
    const toIgnore = this.getIgnoredProps();

    const changedProps = Object.keys(nextProps)
      .filter(key => {
        return !toIgnore[key] && nextProps[key] !== this.props[key];
      });

    return (changedProps.length > 0);
  }

  componentDidUpdate(prevProps, prevState) {
    this.destroyInstance();
    this.initInstance();
  }

  componentDidMount() {
    this.initInstance();
  }

  render() {
    return React.createElement(this.props.tagName, this.getParameters());
  }
}
