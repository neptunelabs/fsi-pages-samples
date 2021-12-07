function changeImage(buttonID) {
  let img;
  let src;
  let curImage = document.getElementById('image');
  switch (buttonID) {
    case "0":
      img =  '//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&width=940';
      src = 'images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg';
      break
    case "1":
      img = '//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-jSbBnR22cXc-unsplash.jpg&width=940&rect=0,0.29634,1,0.66709';
      src = 'images/samples/ssi/furniture/nathan-oakley-jSbBnR22cXc-unsplash.jpg';
      break
    case "2":
      img = '//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-CZysNmnvEJg-unsplash.jpg&width=940';
      src = 'images/samples/ssi/furniture/nathan-oakley-CZysNmnvEJg-unsplash.jpg';
      break
    default:
      img = '//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&width=940';
      src = 'images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg';
  }
  curImage.src = img;
  document.getElementsByTagName("fsi-viewer")[0].changeConfig(undefined, {imagesrc: src});
}

