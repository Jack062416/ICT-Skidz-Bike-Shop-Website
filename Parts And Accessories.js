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
        name: 'Shimano Deore Rear Derailleur',
        image: 'parts1.jpg',
        price: 2500
    },
    {
        id: 2,
        name: 'Shimano Deore Right Shifter',
        image: 'parts2.webp',
        price: 1200
    },
    {
        id: 3,
        name: 'Shimano Deore Cassette Sprocket',
        image: 'parts3.jpg',
        price: 3200
    },
    {
        id: 4,
        name: 'Shimano Deore Chain',
        image: 'parts4.jpg',
        price: 1700
    },
    {
        id: 5,
        name: 'Shimano Deore Brake Set',
        image: 'parts5.jpg',
        price: 6000
    },
    {
        name: 'Shimano Deore Crankset',
        image: 'parts23.jpg',
        price: 4200
    },
    {
        name: 'Shimano Deore Rotors',
        image: 'parts30.jpg',
        price: 2000
    },
    {
        name: 'Shimano Deore Hubs',
        image: 'parts31.jpg',
        price: 3000
    },
    {
        name: 'Sram Eagle RD and Shifter',
        image: 'parts24.jpg',
        price: 3200
    },
    {
        name: 'Speedone Soldier',
        image: 'parts9.webp',
        price: 2700
    },
    {
        name: 'Speedone Sniper Rachet',
        image: 'parts29.jpg',
        price: 6500
    },
    {
        name: 'Koozer XM490',
        image: 'parts10.jpg',
        price: 2300
    },
    {
        name: 'Aeroic AM370 Carbon',
        image: 'parts11.jpg',
        price: 2500
    },
    {
        name: 'Sagmit Secret v36',
        image: 'parts12.jpg',
        price: 3200
    },
    {
        name: 'Giro Synthe MIPS',
        image: 'parts16.webp',
        price: 12000
    },
    {
        name: 'Giyo Socks',
        image: 'parts17.jpg',
        price: 650
    },
    {
        name: 'Giyo Gloves',
        image: 'parts18.jpg',
        price: 400
    },
    {
        name: 'Maxxis Pace',
        image: 'parts19.jpg',
        price: 1200
    },
    {
        name: 'Kenda Wall',
        image: 'parts20.jpg',
        price: 1100
    },
    {
        name: 'Continental Race King',
        image: 'parts21.jpg',
        price: 1150
    },
    {
        name: 'CST Jet TPI',
        image: 'parts26.jpg',
        price: 950
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