document.addEventListener("DOMContentLoaded", function() {

  let instance

  document.getElementById("pagesBtn").addEventListener("click", () => {

    instance = new $FSI.Pages('pagesEle',{
      dir: 'images/samples/pages/product',
      debug: true,
      skin: 'example',
      pageLayout: 'flip',
      listTemplate: 'catalog_list',
      plugins: 'resize,fullScreen',
      onReady: () => {
        hideImg(), setTimeout(changePage(), 800);
      }
    });
    instance.start();
  });
    function hideImg () {
      document.getElementById("pagesEle").style.visibility = "visible";
      document.getElementById("pagesImg").style.display = "none";
      document.getElementById("pagesBtn").style.display = "none";
    }

    function changePage () {
      instance.gotoPageAndZoom(4,'0.26304,0.10011,0.94325,0.64111')
      setTimeout(toggleIndex, 1500);
    }

    function toggleIndex () {
      instance.togglePageIndex()
    }





});
