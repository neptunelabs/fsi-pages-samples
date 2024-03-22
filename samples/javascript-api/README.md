# JS API Sample

FSI Pages contains an extensive JS API with methods and callbacks that you can use.
You can find [an overview of all available parameters in the corresponding documentation](https://docs.neptunelabs.com/docs/fsi-pages/js-api/public-methods).

This example is a simple demonstration of how to use these methods and callbacks.

To display a catalog with FSI Pages, all you need to do is add the following script to the top of your web page:

```html
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/pages/js/fsipages.js'
</script>
```
This will ensure that the FSI Pages is loaded.

Normally you would need to place the *<fsi-pages>* tag in your source code where you want the viewer to be displayed.

In this example, we only want to display the viewer in place of an image when a button is clicked.
This means that the viewer is initialised by JavaScript.

To do this, we have created this part in the body:

```html
<div class="container productContainer" id="productContainer">
  <img id="pagesImg" src="{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/pages/pages-product-thumb-sm.jpg&width=640&height=427" width="640" alt="" height="427">
  <div class="pagesContainer" id="pagesEle">
  </div>
  <button type="button" id="pagesBtn" class="btn btn-lg btn-outline-dark">Show Pages</button>
</div>
```
`productContainer` is the div that contains all the elements.
`pagesImg` is the image that will be displayed on load and replaced by the viewer.
The `pagesEle` div will contain the FSI Pages.
The `pagesBtn` button is used to switch from the image to the viewer.

In the corresponding `style.css` the image and button are placed above the viewer div with `z-index`:

```css
.productContainer .img {
  z-index: 10;
  position: absolute;
}

.productContainer .btn {
  position: absolute;
  z-index: 15;
}
```

The switch on button click is achieved via JS in the corresponding `script.js`:

```js
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

```

A click on the `pagesBtn` element will initialise a new FSI Viewer element in the `pagesEle` element.

The viewer itself is created with `$FSI.createNode("fsi-pages",{parameters})`.

We create `show` which is called with the `onReady` callback (see [documentation](https://docs.neptunelabs.com/docs/fsi-viewer/js-api/callbacks#onready)). With this, we ensure a smooth transition:
Only when the viewer is ready will the viewer element will be set to visible, while the image and button are set to `display:none`.

With `onReady` we also call the function `changePage()` with a timeout: `setTimeout(changePage(), 1000);`.

In this function the method `instance.gotoPageAndZoom(4, '0.26304,0.10011,0.94325,0.64111')` is used (see [documentation](https://docs.neptunelabs.com/docs/fsi-pages/js-api/public-methods#gotopageandzoom)).

For demonstration purposes we also used another function with the `togglePageIndex()` method, which opens the page index (see [documentation](https://docs.neptunelabs.com/docs/fsi-pages/js-api/public-methods#togglepageindex)).
