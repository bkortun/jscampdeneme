let cart=[
    {id:1,productName:"Telefon",quantity:4,unitPrice:4500},
    {id:2,productName:"Laptop",quantity:2,unitPrice:7500},
    {id:3,productName:"Powerbank",quantity:6,unitPrice:6100}
]

cart.map(product=>{
    console.log(product.productName+" : "+product.quantity*product.unitPrice)
});

//linq deki where benziyor
let quantityOver2=cart.filter(product=>product.quantity>2)
console.log(quantityOver2);

let total=cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total);

function addToCart(sepet) {
    sepet.push({id:4,productName:"Monitör",quantity:1,unitPrice:2100});
}

addToCart(cart);
console.log(cart);