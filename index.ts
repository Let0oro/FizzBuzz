// Import stylesheets
import './style.css';

const fizzbuzz = (arr: Array<number>): void => {
  arr.forEach((x: number) => {
    x % 3 === 0 && console.log(x, 'Fizz');
    x % 5 === 0 && console.log(x, 'Buzz');
    x % 3 === 0 && x % 5 === 0 && console.log(x, 'FizzBuzz');
  });
  return;
};

const arr100: Array<number> = Array(100)
  .fill(0)
  .map((v, i) => i + 1);

fizzbuzz(arr100);
