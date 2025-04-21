import { concat, Car, parking, totalPrice, getData } from './Basic.ts';
import axios from 'axios';

//0) [x] Review package.json basics. Understand what happens when 'npm run test' is executed.
//1) [x] Write a test for a function that concatonates two strings.
test('concatenates two strings', () => {
  expect(concat('Space', 'Camp')).toBe('SpaceCamp');
})
//3) [ ] Write a test to create an instance of a car class with properties brand of type string and price of type number
test('creates an instance of a car class', () => {
  const newCar = new Car('Porsche', 90000);
  expect(newCar.brand).toBe('Porsche');
  expect(newCar.price).toBe(90000);
  expect(typeof newCar.brand).toBe('string');
  expect(typeof newCar.price).toBe('number');
})
//5) [x] Write a test to see if there is a method to the car class called honk that returns the string 'honk'
test('checks if honk method exists', () => {
  const cayenne = new Car('Porsche', 90000);
  expect(cayenne.honk()).toBe('honk');
  expect(typeof cayenne.honk()).toBe('string');
})
//7) [x] Write a test to see if there is a method to the car class called title that takes a name argument and returns the string 'my name is <name> and my brand is <brand>'
test('checks if title method exists', () => {
  const cayenne = new Car('Porsche', 90000);
  const name = 'Sparkles'
  expect(cayenne.title(name)).toBe('my name is Sparkles and my brand is Porsche')
})
//9) [x] Write a test to see if an array called 'parking' can holds instances of cars.
test('checks if parking array holds instances of Cars', () => {
  const cayenne = new Car('Porsche', 90000);
  const redBull = new Car('Honda', 100000);
  parking.push(cayenne, redBull);
  expect(parking).toHaveLength(2);
  expect(parking[0]).toBeInstanceOf(Car);
  expect(parking[1]).toBeInstanceOf(Car);
})
//11) [x] Write a test for a function called "totalPrice" that returns the total price of all cars in the parking lot given the array as an argument
test('totalPrice function returns the total price of all cars in parking', () => {
  expect(typeof totalPrice(parking)).toBe('number');
  expect(totalPrice(parking)).toBe(190000);
})
//13) [ ] Write a test for a function called "getData" that calls an API with axios and returns a object with the key of 'data' and a value object with properties 'words' of type string and 'numbers' of type numbers
test('getData function returns the correct structure', async () => {
  const expectedResult = {data: { words: "string", numbers: 5}};
  jest.spyOn(axios, 'get').mockReturnValue(expectedResult);
  const result = await getData();
  expect(result).toStrictEqual(expectedResult);
})
//13) Note: use this mock result structure {data: { words: "string", numbers: 5}}
//13a) verify if axios is installed via package.json file
//13b) Install axios
//13c) import axios, mock it, write the mock response, then write the test.
