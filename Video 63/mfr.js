let a = [1, 63, 33, 55, 67];
// let newarr = [];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element**2);
// }

let newarr = a.map((e) => {
    return e ** 2;
})

console.log(newarr);

const GreaterthanSeven = (e) => {
    if (e > 7) {
        return true;
    }
    else {
        return false;
    }
}

console.log(a.filter(GreaterthanSeven));

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))