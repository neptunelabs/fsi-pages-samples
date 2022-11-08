# Using FSI Pages for Catalogs - with chapters

This readme describes how the detail page sample with *FSI Pages* with chapters is achieved.
Adding the parameter `plugins:"Chapters"` adds a select box to the user interface of FSI Pages.
The user can directly access sections of a catalog by selecting the corresponding item in the select box.

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
  id='fsi-pages-1629127147793-9455915'
  dir='images/samples/pages/travel'
  width='100%'
  height='600px'
  pageLayout='flip'
  skin='white'
  listTemplate='catalog_list'
  plugins='resize,fullScreen,chapters'
>
</fsi-pages>
```

## Chapters

For this demo, we've added chapters to the catalog. You can see them by clicking on the **Table Of Contents** button in the menu bar:

![Config Image](readme-chapters.png)

They are added by activating the plugin by adding it as a plugin parameter: `plugins='resize,fullScreen,chapters'`
and by adding the following to the `<fsi-pages>` tag:

```html
<!-- the code below provides the data for the "chapters" plug-in -->
  <fsi-pages-chapters style='display:none'>
    <chapter page='1'>Cover</chapter>
    <chapter page='2'>
      New Zealand
      <chapter page='2'>Mangaotaki Valley</chapter>
      <chapter page='3'>Sutherland Falls</chapter>
      <chapter page='4'>Fjordland National Park</chapter>
      <chapter page='5'>O'Neill Bay</chapter>
    </chapter>
    <chapter page='6'>
      Switzerland
      <chapter page='6'>Monte Tamaro</chapter>
      <chapter page='7'>Monte Rosa</chapter>
      <chapter page='8'>Matterhorn</chapter>
      <chapter page='9'>Zermatt</chapter>
      <chapter page='10'>Oberhofen Castle</chapter>
      <chapter page='11'>Lucerne</chapter>
    </chapter>

  </fsi-pages-chapters>
```

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-pages).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
