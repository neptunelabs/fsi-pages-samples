# Using FSI Pages for Catalogs - with demo mode

This readme describes how the detail page sample with *FSI Pages* with a demo mode is achieved.
The aim of the demo is to show how you can easily integrate images as a catalog by just adding
a simple viewer tag.

In order to display catalogs with FSI Pages, you only need to add the corresponding script
to the head of your website:

```html
<script
  src='https://docs.neptunelabs.com/fsi/viewer/applications/pages/js/fsipages.js'
</script>
```
This ensures that FSI Pages is loaded.

## Demo Mode

For this demo, we've added a demo mode to the catalog which is a small version of the catalog which is displayed as a thumbnail.
Clicking on the demo will lead to a full FSI Pages instance

You need to place the `<fsi-pages` tag in the body.
In our example this will look like this:

```html
  <fsi-pages width='400' height='300' dir='images/samples/pages/product'
             cfg='pages_presets/catalog_links.xml' PageLayout='flip' hideuiindemomode='true'
             demourl='/pdp/' DemoURLTarget='_blank' idleautoturn='true'
             pageLayout='flip'
             skin='example'
             listTemplate='catalog_list'
             plugins='resize,fullScreen'>
</fsi-pages>
```

`hideuiindemomode='true'` omits the UI in the demo mode.

`idleautoturn='true'` enables the page turning effect.

`demourl='/pdp/'` defines the target URL.

`DemoURLTarget='_blank'` defines that the target URL is opened in another window.

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-pages).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
