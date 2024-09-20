const cartLength = document.getElementById("cart-count");
let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    cartLength.textContent = cart.length;
}
function addtoCart(itemB) {
    const item = itemB.parentElement.parentElement;
    const itemImg = item.querySelector(".item-img").currentSrc;
    const itemName = item.querySelector(".item-name").innerText;
    const itemPrice = item.querySelector(".item-price").innerText;
    const itemP = item.querySelector(".item-p").innerText;
    const itemCard = {
        img: itemImg,
        name: itemName,
        price: itemPrice,
        p: itemP,
        quantity :1
    }
    let found =false
    cart.forEach(item => {
        if (item.name === itemName) {
            item.quantity++;
            found = true;
        }
    });
    if(!found){
        cart.push(itemCard);
    }
    localStorage.setItem("cart", JSON.stringify(cart)); 
    cartLength.textContent = cart.length;
}



