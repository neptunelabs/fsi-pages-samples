const Sample = () => {
  return (
    <div className="container">
    <div className='fsi-viewer-section'>
        <FSIComponent tagName="fsi-pages" width={"100%"} height={"500px"} dir={"images/samples/pages/product"}
                      listTemplate={"catalog_list"} plugins={"FullScreen,Resize"} idleAutoTurn={true}/>
    </div>
    </div>
  );
};
