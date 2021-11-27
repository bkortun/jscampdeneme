import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"
import Customer from "../models/customer.js";

console.log("User Component Loaded")

let logger1=new MongoLogger();
let userService=new UserService(logger1);

let user1=new User(1,"Barış","Kortun","Aydın");
let user2=new User(2,"İrem","Kortun","İzmir");

userService.add(user1);
userService.add(user2);
console.log(userService.list());
console.log(userService.getById(1));

let customer={id:1,firstName:"Barış"}
//prototyping
customer.lastName="Kortun";
console.log(customer.lastName);
console.log("--------------------------------------------");
userService.load();
let customerToAdd=new Customer(1,"Engin","Demiroğ","Ankara,43,12356");
customerToAdd.type="customer";
userService.add(customerToAdd);
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted());