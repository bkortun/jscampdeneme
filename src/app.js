//... (rest):1.parametre id olsun geriye kalanlar ürünler olsun demek c# daki params'a benziyor
//...products:aslında bir array
let showProducts = function (id,...products){
    console.log(id);
    console.log(products[0]);
}
//console.log(typeof showProducts)
// showProducts(10,["aasdf","aafsf","agasf","aaasf","aadsf"]);

//spread:ayrıştırmak demek, arraydeki değerleri virgülünden ayırıyor
let points=[12,56,898,13,44,6,798,51,34];
console.log(Math.max(...points));
console.log(..."ABC","D",..."EFG","H");

//Destructure:parçalamak demek bir arraydeki elemanları değişkenlere atar
let pops=[1,2,3];//elemanlarım
let [bir,iki,uc]=pops;//değişkenlerim
console.log(bir);

function someFunc([değer1],number) {
    console.log(değer1);
}
someFunc(pops);

let category={id:1,name:"armut"}
console.log(category.id);
console.log(category["name"]);

let {id,name}=category;
console.log(id);
console.log(name);