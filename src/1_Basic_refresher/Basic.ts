import axios from "axios";

//2) [x] create a function that concatenates/combines 2 words
export const concat = (string1, string2) => {
  return string1 + string2;
}
//4) [x] create a class called "Car" that has properties brand of type string and price of type number
//6) [x] add a honk method to the Car class that returns the string 'honk'.
//8) [x] add a title method to the Car class that takes a name argument and returns the string 'my name is <name> and my brand is <brand>'
export class Car {
  brand: string;
  price: number;
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  honk() {
    return 'honk';
  }
  title(name: string) {
    return `my name is ${name} and my brand is ${this.brand}`;
  }
}
//10) [x] Create an array called parking
export const parking : Car[] = [];
//12) [x] Create a function called "totalPrice" that returns the total price of all cars.
export const totalPrice = (parkingArr) => {
  return parkingArr.reduce((acc: number, elm: Car) => acc += elm.price, 0)
}
//14) [ ] Create a getData function that retrieves data from "https://jsonplaceholder.typicode.com/todos/1"
export const getData = async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  return result;
}
//14 note:  axios returns data in { data: (....) } key.
// The returned data has the following object format
// {
//  "userId": 1,
//  "id": 1,
//  "title": "delectus aut autem",
//  "completed": false
// }

