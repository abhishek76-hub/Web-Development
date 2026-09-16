let a = [1, 63, 33, 55, 67];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// a.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// })

let obj = {
    x: 1,
    y: 2,
    z: 3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;

    const element = obj[key];
    console.log(key, element);

}
for (const x of a) {
    console.log(x);
}