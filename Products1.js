let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Toseek Avalenche 1',
        image: 'trek1.jpg',
        price: 10989
    },
    {
        id: 2,
        name: 'Toseek Brandon 2.0',
        image: 'trek3.jpg',
        price: 9989
    },
    {
        id: 3,
        name: 'Toseek Harrison 2.0',
        image: 'trek2.jpg',
        price: 10000
    },
    {
        id: 4,
        name: 'Pinewood Trident Flux 2.0',
        image: 'pw1.jpg',
        price: 15990
    },
    {
        id: 5,
        name: 'Pinewood Hellcat 7',
        image: 'pw2.jpg',
        price: 19990
    },
    {
        name: 'Pinewood Evolution 2.0',
        image: 'pw3.jpg',
        price: 34990
    },
    {
        name: 'Merida Silex 1.0',
        image: 'mda1.jpg',
        price: 54889
    },
    {
        name: 'Merida Scultura 2.0',
        image: 'mda3.jpg',
        price: 72889
    },
    {
        name: 'Merida Scultura 3.0',
        image: 'mda3.jpg',
        price: 84889
    },
    {
        name: 'Giant XTC Crossmark',
        image: 'giant1.jpg',
        price: 61999
    },
    {
        name: 'Giant Talon 1',
        image: 'giant2.jpg',
        price: 103999
    },
    {
        name: 'Giant Talon 2',
        image: 'giant2.jpg',
        price: 118999
    },
    {
        name: 'Orbea Triton 1',
        image: 'orbea5.jpg',
        price: 138000
    },
    {
        name: 'Orbea Speed V7',
        image: 'orbea2.jpg',
        price: 385897
    },
    {
        name: 'Orbea Triton 3',
        image: 'orbea3.jpg',
        price: 589689
    },
    {
        name: 'Bianchi Silux 1',
        image: 'bianchi5.webp',
        price: 298899
    },
    {
        name: 'Bianchi Methanol v901',
        image: 'bianchi11.jpg',
        price: 420569
    },
    {
        name: 'Bianchi XTR v2',
        image: 'bianchi5.webp',
        price: 1119989
    },
    
    

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}