# Using FSI Pages for Catalogs - with hyperlinks

This readme describes how the detail page sample with *FSI Pages* with hyperlinks displaying is achieved.
The aim of the demo is to show how you can easily integrate images as a catalog by just adding a simple viewer tag.

In order to display catalogs with FSI Pages, you only need to add the corresponding script
to the head of your website:

```html
<script
  src='https://docs.neptunelabs.com/fsi/viewer/applications/pages/js/fsipages.js'
</script>
```
This ensures that FSI Pages is loaded.

Afterwards, you need to place the `<fsi-pages>` tag in the body.
In our example this will look like this:

```html
      <fsi-pages
  id="fsi-pages-1629127147793-9455915"
  dir="images/samples/pages/product"
  width="100%"
  height="600px"
  pageLayout="flip"
  skin="example"
  listTemplate="catalog_list"
  plugins="resize,fullScreen"
>
</fsi-pages>
```

## Hyperlinks

For this demo, we've added hyperlinks to the catalog. You can see them while hovering over the marked areas:

![Config Image](readme-pages.png)

You can add those links by using the hyperlink editor of FSI Server.

For an in-depth explanation on how it works, please visit [the tutorial "How to use the Hyperlink Editor"](https://www.neptunelabs.com/fsi-pages-js/how-to-use-the-hyperlink-editor/).

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-pages).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
