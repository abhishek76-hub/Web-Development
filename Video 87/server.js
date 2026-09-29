import fs from "fs/promises"

let a = await fs.readFile("thing.txt");
let b = await fs.writeFile("thing.txt" , "\n\n\n\n This is Amazing promise");
let c = await fs.appendFile("thing.txt" , "\n\n\n\n This is Amazing promise");

console.log(a.toString(), b , c)