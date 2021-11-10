class Customer{
    constructor(id,customerNumber){
        this.id=id;
        this.customerNumber=customerNumber;
    };
}
let customer=new Customer(1,"12345");
//prototyping
customer.name="murat"
console.log(customer.name);

Customer.bisey="bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class KisiselCustomer extends Customer{
    constructor(firstName,id,custumerName){
    super(id,custumerName);
    this.firstName=firstName
    }
}

class KurumsalCustomer extends Customer{
    constructor(company,id,customerNumber){
    super(id,customerNumber)
    this.company=company;
    }
}
