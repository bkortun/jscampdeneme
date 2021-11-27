import { users } from "../data/users.js";
import DataErrors from "../models/dataError.js";

export default class UserService {
  constructor(loggerService) {
    
    this.employees = [];
    this.customers = [];
    this.errors = [];
    this.loggerService = loggerService;
  }

  //refactorPoint1
  load() {
    for (const user of users) {
      switch (user.type) {
        case "customer":
          if (!this.checkCustomerValidityForErrors(user)) {
            this.customers.push(user);
          }

          break;
        case "employee":
          if (!this.checkEmployeeValidityForErrors(user)) {
            this.employees.push(user);
          }
          break;

        default:
          this.errors.push(new DataErrors("Wrong user type", user));
          break;
      }
    }
  }

  //react->library:formik-yup
  checkCustomerValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataErrors(`Validation problem. ${field} is required.`, user)
        );
      }
    }
    if (Number.isNaN(Number.parseInt(user.age))) {
      hasErrors = true;
      this.errors.push(
        new DataErrors(`Validation problem. ${user.age} is not a number.`, user)
      );
    }
    return hasErrors;
  }

  checkEmployeeValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataErrors(`Validation problem. ${field} is required.`, user)
        );
      }
    }
    if (Number.isNaN(Number.parseInt(user.age))) {
      hasErrors = true;
      this.errors.push(
        new DataErrors(`Validation problem. ${user.age} is not a number.`, user)
      );
    }

    return hasErrors;
  }

  //refactorPoint2
  add(user) {
    switch (user) {
      case "customer":
        if (!this.checkCustomerValidityForErrors(user)) {
            this.customers.push(user);
          }
        break;
      case "employee":
        if (!this.checkEmployeeValidityForErrors(user)) {
            this.employees.push(user);
          }
        break;

      default:
        this.errors.push(new DataErrors("This user can not be added. Wrong user type.", user));
        break;
    }
    this.loggerService.log(user);
  }
  list() {
    return this.customers;
  }
  getById(id) {
    return this.customers.find((u) => u.id === id);
  }
  //refactorPoint3
  getCustomersSorted(){
    return this.customers.sort((customer1,customer2)=>{
        if (customer1.firstName<customer2.firstName) {
            return 1;
        }else if (customer1.firstName===customer2.firstName) {
            return 0;
        }
        else{
            return -1;
        }
    })
  }
}
