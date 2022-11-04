# Using FSI Pages for Catalogs - with demo mode

This readme describes how the detail page sample with *FSI Pages* with a demo mode is achieved.
The aim of the demo is to show how you can easily integrate images as a catalog by just adding
a simple viewer tag.

# Add your images/ assets to FSI Server

First, you'll need to upload the images you want to use to FSI Server.
You can install a [demo version](https://www.neptunelabs.com/get/) via Docker or use our [online demo server](https://demo.fsi-server.com/fsi/interface/) to try it out first.

It's important to use the correct source connector for your images:

- *Storage*: images will be imported to the storage for high performance Single Source Imaging
- *Static*: for static files only, e.g. style graphics you want to use on your website

# Uploading images

Depending on the type of the selected source connector, you can upload different types of files. There are several possibilities to upload images into the interface.

![Config Image](readme-pages1.png)

- Choose the Upload tab, click the "Choose files" button to add files to upload to the list. The files will be uploaded to the current folder.
- Drag & Drop files to the file view or the tree view

# Use catalogs on the website

While having an image or a folder selected, you can see all possible publishing ways for the specific item by visting the Publish To Web tab.
For this example, select the preset *Catalog with flip layout* in the section *E-Books/ E-Catalogs*:

![Config Image](readme-pages-1.png)

The *Source Code* section enables you to control the look of your viewer by setting the dimensions and format, as well as adding effects, different parameters or crop options to it.
In this area you also can see the source code for your selected publishing option which you can edit and copy to publish the viewer.
You also see the required scripts which need to be embedded on the site.

![Config Image](readme-pages-2.png)

In order to display catalogs with FSI Pages, you only need to add the corresponding script
to the head of your website:

```html
<script
  src='https://docs.neptunelabs.com/fsi/viewer/applications/pages/js/fsipages.js'
</script>
```
This ensures that FSI Pages is loaded.

Afterwards, you need to place the *<fsi-pages>* tag you see in the Publish section in the modal body.
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

## Demo Mode

For this demo, we've added hyperlinks to the catalog. You can see them while hovering over the marked areas:

![Config Image](readme-pages.png)

You can add those links by using the hyperlink editor of FSI Server.

For an in-depth explanation on how it works, please visit [the tutorial "How to use the Hyperlink Editor"](https://www.neptunelabs.com/fsi-pages-js/how-to-use-the-hyperlink-editor/).

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-pages).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
