let imageslink = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658244944_1658232168_Dairy-Bakery_1680-x-320-_sugar-strip.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658179668_Oil-Mela_1680x320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658305953_Snacking_1680x320_West.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657897108_1657641245_1657556677_1657205534_JioMart-Best-Selling-Electronics-Carousel-Banner-27_05_2022.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657897383_1657640341_1657556982_1656598512_1656425860_Beauty-Store-Banner-1680x320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658255192_July_20_Banner-1_web.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658322110_Mumbai.jpg",



]
let leftbtn = document.getElementById("left-btn");
let rightbtn = document.getElementById("right-btn");
let crauser = document.getElementById("crauser")
let imageState = 0;
rightbtn.addEventListener("click", function() {
    imageState++;
    if (imageState === imageslink.length) {
        imageState = 0;
    }
    crauser.src = imageslink[imageState]
        //console.log("hello")
})
leftbtn.addEventListener("click", function() {
    imageState--;
    if (imageState < 0) {
        imageState = imageslink.length - 1;
    }
    crauser.src = imageslink[imageState]
        // console.log("hello")
})