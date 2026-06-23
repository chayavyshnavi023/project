// Demo OTP
const DEMO_OTP = "123456";

// Cart Data
let cart = [];
let total = 0;

// Send OTP
function sendOTP() {

let email = document.getElementById("email").value;
let msg = document.getElementById("loginMsg");

if(email === ""){
msg.innerHTML = "❌ Please enter email";
return;
}

document.getElementById("otpSection").style.display = "block";
msg.innerHTML = "✅ OTP Sent Successfully (Demo OTP: 123456)";
}

// Verify OTP
function verifyOTP(){

let otp = document.getElementById("otp").value;
let email = document.getElementById("email").value;
let msg = document.getElementById("loginMsg");

if(otp === DEMO_OTP){

document.getElementById("loginPage").style.display = "none";
document.getElementById("mainWebsite").style.display = "block";

document.getElementById("userEmail").innerText = email;

localStorage.setItem("milkhubUser", email);

}else{
msg.innerHTML = "❌ Invalid OTP";
}

}

// Auto Login
window.onload = function(){

let savedUser = localStorage.getItem("milkhubUser");

if(savedUser){

document.getElementById("loginPage").style.display = "none";
document.getElementById("mainWebsite").style.display = "block";

document.getElementById("userEmail").innerText = savedUser;

}

setupSearch();
};

// Logout
function logout(){

localStorage.removeItem("milkhubUser");

location.reload();

}

// Add To Cart
function addToCart(name, price){

cart.push({
name:name,
price:price
});

updateCart();

alert(name + " Added To Cart ✅");

}

// Update Cart
function updateCart(){

let cartItems = document.getElementById("cartItems");

cartItems.innerHTML = "";

total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">
<span>${item.name} - ₹${item.price}</span>
<button onclick="removeItem(${index})">Remove</button>
</div>
`;

});

document.getElementById("cartTotal").innerText = total;

}

// Remove Item
function removeItem(index){

cart.splice(index,1);

updateCart();

}

// Place Order
function placeOrder(){

let name =
document.getElementById("customerName").value;

let address =
document.getElementById("address").value;

let payment =
document.getElementById("paymentMethod").value;

let msg =
document.getElementById("orderMsg");

if(cart.length === 0){

msg.innerHTML =
"❌ Cart is Empty";

return;

}

if(name === "" || address === ""){

msg.innerHTML =
"❌ Fill all details";

return;

}

let orderId =
"AMH" + Math.floor(Math.random()*100000);

msg.innerHTML =
`✅ Order Placed Successfully! <br>
Order ID: <b>${orderId}</b><br>
Payment: ${payment}`;

localStorage.setItem(
"lastOrder",
orderId
);

cart = [];

updateCart();

}

// Track Order
function trackOrder(){

let orderId =
document.getElementById("orderId").value;

let status =
document.getElementById("trackStatus");

let savedOrder =
localStorage.getItem("lastOrder");

if(orderId === ""){

status.innerHTML =
"❌ Enter Order ID";

return;

}

if(orderId === savedOrder){

status.innerHTML =
"🚚 Your Order is Out For Delivery";

}else{

status.innerHTML =
"⚠️ Order Not Found";

}

}

// Search Products
function setupSearch(){

let searchBox =
document.getElementById("searchBox");

if(!searchBox) return;

searchBox.addEventListener("keyup", function(){

let value =
this.value.toLowerCase();

let products =
document.querySelectorAll(".product-card");

products.forEach(product=>{

let text =
product.innerText.toLowerCase();

if(text.includes(value)){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

});

}

// Dark Mode
const darkBtn =
document.getElementById("darkModeBtn");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

}
