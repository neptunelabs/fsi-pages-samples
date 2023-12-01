document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("pagesBtn").addEventListener("click", () => {

    const show = () => {
      document.getElementById("pagesEle").style.visibility = "visible";
      document.getElementById("pagesImg").style.display = "none";
      document.getElementById("pagesBtn").style.display = "none";
      // change page and zoom after timeout
      setTimeout(changePage(), 1000);
    }

    const instance = $FSI.createNode("fsi-pages", {
      dir: 'images/samples/pages/product',
      width: '640px',
      height: '427px',
      debug: true,
      skin: 'example',
      pageLayout: 'flip',
      listTemplate: 'catalog_list',
      plugins: 'resize,fullScreen',
      // listen for finished loading FSI Pages and becomes interactive
      onReady: show
    });


    function changePage () {
      // change page and zoom after timeout
      instance.gotoPageAndZoom(4,'0.26304,0.10011,0.94325,0.64111')
      // toggle index after timeout
      setTimeout(toggleIndex, 1500);
    }

    function toggleIndex () {
      // toggle page index
      instance.togglePageIndex()
    }


    document.getElementById('pagesEle').appendChild(instance)
  });


});
