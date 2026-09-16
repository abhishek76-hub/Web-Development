let arr = [1, 3, 5, 7, 9];
// Index   0  1  2  3  4

// Arrays are mutable, while strings are immutable

arr[0] = 5666;
console.log(arr, typeof arr);
console.log(arr.length)
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());
console.log(arr.push(100))
console.log(arr.push("Abhi"))
console.log(arr.shift());
console.log(arr.unshift("Jack"));
console.log(delete (6));

let a1 = [20, 30, 10];
let a2 = [11, 22, 33];
let a3 = [44, 55, 66];

console.log(a1.concat(a2, a3));
console.log(a1.sort())

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.splice(1, 3, 333, 334));
console.log(numbers)
console.log(numbers.slice(1, 3,))