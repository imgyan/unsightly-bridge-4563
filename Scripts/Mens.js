let productdata = [{
    img: "https://www.jiomart.com/images/product/330x410/rv1sq5nnry/neutron-classical-model-chain-and-chain-watch-gold-and-black-colour-analog-metal-and-stainless-steel-belt-2-watch-combo-for-boys-and-men-bcpl32-b674-product-images-rv1sq5nnry-0-202207161806.jpg",
    name: "NEUTRON Modish Analogue Sports And ",
    price: " Rs 536",
    popularity: "No",
}, {
    img: "https://www.jiomart.com/images/product/330x410/rvu8cdwsp8/neutron-modish-analogue-sports-and-rajasthan-royals-rr-ipl-black-and-blue-colour-analog-plastic-and-genuine-leather-belt-2-watch-combo-for-boys-and-men-brm30-ipl7-product-images-rvu8cdwsp8-0-202207161224.jpg",
    name: "NEUTRON Classical Model Chain And Chain",
    price: " Rs 402",
    popularity: "Yes",
}, {
    img: "https://www.jiomart.com/images/product/330x410/rvrnir80sh/quvyarts-rakhi-sets-with-roli-chawal-for-brother-pack-of-8-multi-color-product-images-rvrnir80sh-0-202207152144.jpg",
    name: "Quvyarts Rakhi Sets With Roli Chawal For Brother ",
    price: " Rs 285",
    popularity: "No",
}, {
    img: "https://www.jiomart.com/images/product/330x410/rvbfeefwht/black-collection-men-s-color-block-hooded-neck-full-sleeve-t-shirt-sku-bcn012_redblack_xl-product-images-rvbfeefwht-0-202207151302.jpg",
    name: "Black Collection Men's Color Block Hooded",
    price: " Rs 500",
    popularity: "NO",
}, {
    img: "https://www.jiomart.com/images/product/330x410/rvn8oc2nt9/tistabene-blue-solid-cotton-shirt-xl-product-images-rvn8oc2nt9-0-202207091755.jpg",
    name: "Black Collection Men's Color Block Hooded Neck Full Sleeve T-Shirt - SKU: BCN012_RedBlack_XL",
    price: " Rs 536",
    price2: "Popularity",
}, {
    img: "https://www.jiomart.com/images/product/330x410/rvhh8ugte8/chakradhar-distributors-men-genuine-leather-belt-brown-product-images-rvhh8ugte8-0-202207011456.jpg",
    name: "NEUTRON Modish Analogue Sports And ",
    price: " Rs 536",
    popularity: "No",
}, {
    img: "https://www.jiomart.com/images/product/330x410/rvnbhowome/wrightrack-analog-blue-dial-brown-strap-for-men-wt516-product-images-rvnbhowome-0-202206081609.jpg",
    name: "NEUTRON Classical Model Chain And Chain",
    price: " Rs 402",
    popularity: "No",
}, {
    img: "https://www.jiomart.com/images/product/330x410/rvusceqwr4/alcis-men-self-design-light-blue-polo-t-shirt-product-images-rvusceqwr4-0-202205310405.jpg",
    name: "Quvyarts Rakhi Sets With Roli Chawal For Brother ",
    price: " Rs 285",
    popularity: "Yes",
}, {
    img: "https://www.jiomart.com/images/product/330x410/rvxx5em4ul/combo-of-3-units-product-images-rvxx5em4ul-0-202205180241.jpg",
    name: "Black Collection Men's Color Block Hooded",
    price: " Rs 500",
    popularity: "No",
}, {
    img: "https://www.jiomart.com/images/product/330x410/rvqcxbjt9m/try-this-men-blue-striped-cotton-t-shirt-product-images-rvqcxbjt9m-0-202202271447.jpg",
    name: "Black Collection Men's Color Block Hooded Neck",
    price: " Rs 536",
    popularity: "Yes",

}, ]



let container = document.getElementById("container");
let filter = document.getElementById("filter");
let allproduct = document.getElementById("ALL-filter");

function Display(data) {
    container.innerHTML = "";
    data.forEach(function(ele) {
        let product = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.img;
        let name = document.createElement("h4");
        name.innerText = ele.name;
        let price = document.createElement("h3");
        price.innerText = ele.price;
        let popularity = document.createElement("h3");
        popularity.innerText = ele.popularity;
        product.append(img, name, price);
        container.append(product);
    })
}
Display(productdata);
filter.addEventListener("click", function() {
    let filtered = productdata.filter(function(ele) {
        return ele.popularity === filter.value
        console.log("hello")
    })
    Display(filtered)
})
allproduct.addEventListener("click", function() {
    Display(productdata);
})







var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}