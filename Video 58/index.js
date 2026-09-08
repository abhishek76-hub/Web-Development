function nice(name) {
    console.log("Hey " + name + " I am good !!")
    console.log("Hey " + name + " I am Nice !!")
    console.log("Hey " + name + " I am Abhishek !!")
}

// nice("Rohan")

// nice("Soham")

function sum(a, b, c = 3) { // c is optional or default
    // console.log(a + b)
    return a + b + c
}

result1 = sum(9, 10);
result2 = sum(20, 10);
result3 = sum(51, 10, 1);

console.log(" The sum of the number is: ", result1)
console.log(" The sum of the number is: ", result2)
console.log(" The sum of the number is: ", result3)

const func1 = (x) =>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(90);
func1(100);