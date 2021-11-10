function addToCart(quantity,productName="peynir") {
    console.log(quantity+" adet "+productName+" sepete eklendi")
}
addToCart()
addToCart("elma")
addToCart("yumurta",5)
addToCart("armut")

//undefined:tanımlı olmayan bir şey ,bellekte yok
//null:

let sayHallo=()=>{
    console.log("hello world")
}
sayHallo();

function addToCart2(x) {
    console.log(products)
    //scope:fonksyonun içinde products'ı bulamadığı için bir üst mertebede arıyor bu olaya scope denir.
}

let products=[
    {productName:"elma",quantity:4},
    {productName:"armut",quantity:2},
    {productName:"karpuz",quantity:7}
]
addToCart2(products)

function add(num1,num2) {
    console.log(num1+num2)
}
add(20,30)

//Destructure
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)


let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}={productName:"elma",unitPrice:3,quantity:12})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)