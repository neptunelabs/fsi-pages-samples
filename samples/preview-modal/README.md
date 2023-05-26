# Using FSI Pages for Catalogs - Modal & Demo Mode Version

This readme describes how to achieve the detail page example using *FSI Pages* in demo mode and as a modal.
The aim of the demo is to show how you can easily integrate images as a catalogue by adding a simple viewer tag.
Simple viewer tag.
Note that this example uses the Bootstrap modal.

# Use catalogs on the website

To display catalogues with FSI Pages, all you need to do is add the following script
to the head of your website:

```html
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/pages/js/fsipages.js'
</script>
```
This ensures that FSI Pages is loaded.

# Add Pages in demo mode as thumbnail to website - modal on click

We will add a Pages viewer in demo mode that opens a model when clicked.
Note that we are using the bootstrap modal technique.

```html
<div class="row pb-3">
  <h3>Browse through our catalog:</h3>
  <fsi-pages
    data-bs-target="#exampleModal" data-bs-toggle="modal"
    class="fsi-code"
    height="250"
    dir="images/samples/pages/product"
    cfg="pages_presets/catalog_links.xml"
    PageLayout="flip"
    hideuiindemomode="true"
    demoURL="#"
    DemoURLTarget="_self"
    idleautoturn="true"
    pageLayout="flip"
    skin="example"
    listTemplate="catalog_list"
    plugins="resize,fullScreen"
  >
  </fsi-pages>
</div>
```

The modal itself is defined at the end of the <main> section.
The data-bs target, as seen above, must have the same name as the ID of your modal div.


```html
<div
  aria-hidden="true"
  aria-labelledby="myExtraLargeModalLabel"
  class="modal fade bd-example-modal-xl"
  id="exampleModal"
  role="dialog"
  tabindex="-1"
>
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
      </div>
      <div class="modal-body">
        <fsi-pages
          dir="images/samples/pages/product"
          height="600px"
          id="fsi-pages-1629127147793-9455915"
          listTemplate="catalog_list"
          pageLayout="flip"
          plugins="resize,fullScreen"
          skin="example"
          width="100%"
        ></fsi-pages>
      </div>
    </div>
  </div>
</div>
```
The modal body also contains the basic FSI Pages tag.
The next section shows how to extract the pages tag from FSI Server.

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-pages).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
