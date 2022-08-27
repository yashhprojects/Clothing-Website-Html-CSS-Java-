//Cart
let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

// open cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};
// close cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};

//cart working
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

//making ftn
function ready(){
    // remove items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for( var i = 0;i< removeCartButtons.length;i++){
        var button = removeCartButtons[i]
        button.addEventListener('click' ,removeCartItem)
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for( var i = 0;i< removeCartButtons.length;i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    // add to cart
    var addCart = document.getElementsByClassName('add-cart')
    for( var i = 0;i< addCart.length;i++){
        var button = addCart[i]
        button.addEventListener('click', addCartClicked)

    }
}

// remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updatetotal();
}

//Quantity changes
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1 ;
    }
    updatetotal()
}


function addProductToCart(title , price, productImg){
     var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsName = cartItems.getElementsByClassName("cart-product-title");
    for ( var i = 0;i< cartItemsName.length;i++){
        // if(cartItemsName[i].innerText == title)
        alert("You have already add this item to cart");
        return;     
    }
}
                          





//update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0;
    for( var i = 0;i< cartBoxes.length; i++){
        var cartBox  = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$" , ""))
        var quantity = quantityElement.value
        total= total + (price * quantity);
        // if price contain some cents 
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    }
}