function changeImage(buttonID) {
  let img;
  let curImage = document.getElementById('image');
  switch (buttonID) {
    case "0":
      img =  '//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&width=940';
      break
   case "1":
      img = '//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-jSbBnR22cXc-unsplash.jpg&width=940&rect=0,0.29634,1,0.66709';
      break
    case "2":
      img = '//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-CZysNmnvEJg-unsplash.jpg&width=940';
      break
     default:
            img = '//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&width=940';
  }
  curImage.src = img;
}


