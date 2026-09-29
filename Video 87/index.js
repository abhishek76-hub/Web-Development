const fs = require("fs")
// const fs = require("fs/promises")

console.log("starting")
// fs.writeFileSync("harry.txt", "Harry is a good boy")

fs.writeFile("thing2.txt", "Harry is a good boy2", () => {
    console.log("done")
    fs.readFile("thing2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})
fs.appendFile("thing.txt", "robo", (e, d) => {
    console.log(d)
})
console.log("ending");