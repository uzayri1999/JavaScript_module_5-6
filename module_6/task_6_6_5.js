const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
let arrValues = [];

for (let key in obj) {
    if (Array.isArray(obj[key])) {
        for (let znach of obj[key]) {
            arrValues.push(znach);
        }
    } else {
        arrValues.push(obj[key]); 
    }
}

console.log(arrValues);