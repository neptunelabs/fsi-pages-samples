# Using FSI Pages for Catalogs - Modal Version

This readme describes how the detail page sample with *FSI Pages* in a modal is achieved.
The aim of the demo is to show how you can easily integrate images as a catalog by just adding
a simple viewer tag.
Please note that this sample uses the Bootstrap modal.

# Add a static image as thumbnail to website - modal on click

We will add an image which will open a modal on click. Please keep in mind we are using the Bootstrap modal technique.

```html
 <h3>Browse through our catalog:</h3>
<div data-bs-toggle='modal' data-bs-target='#exampleModal'>
  <img
    src='//docs.neptunelabs.com/fsi/server?type=image&source=images/samples/pages/pages-thumb.jpg&width=300'
    width='300' alt=''>
</div>
```

The modal itself is defined at the end of the <main> section.
The data-bs-target as seen above has to have the same name as the ID of your modal div.


```html
  <div id='exampleModal' class='modal fade bd-example-modal-xl' tabindex='-1' role='dialog'
       aria-labelledby='myExtraLargeModalLabel' aria-hidden='true'>
  <div class='modal-dialog modal-xl'>
    <div class='modal-content'>
      <div class='modal-header'>
        <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
      </div>
      <div class='modal-body'>
        <fsi-pages
          id='fsi-pages-1629127147793-9455915'
          dir='images/samples/pages/product'
          width='100%'
          height='600px'
          pageLayout='flip'
          skin='example'
          listTemplate='catalog_list'
          plugins='resize,fullScreen'
        >
        </fsi-pages>
      </div>
    </div>
  </div>
</div>
```
The modal-body also contains the basic FSI Pages tag.
The next section shows how you extract the pages tag from FSI Server.

# Use catalogs on the website

In order to display catalogs with FSI Pages, you only need to add the corresponding script
to the head of your website:

```html
<script
  src='https://docs.neptunelabs.com/fsi/viewer/applications/pages/js/fsipages.js'
</script>
```
This ensures that FSI Pages is loaded.

Afterwards, you need to place the `<fsi-pages>` tag you see in the modal body.
In our example this will look like this, as seen above:

```html
 <fsi-pages
  id='fsi-pages-1629127147793-9455915'
  dir='images/samples/pages/product'
  width='100%'
  height='600px'
  pageLayout='flip'
  skin='example'
  listTemplate='catalog_list'
  plugins='resize,fullScreen'
>
</fsi-pages>
```

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-pages).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
