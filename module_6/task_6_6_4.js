const field = 3;
let arrColumn = [];
let k = 0;

for (let i = 0; i < field; i ++ ) {
    let arrRow = [];
    for (let j = 0; j < field; j ++ ) {
        k % 2 === 0 ? arrRow.push('X') : arrRow.push('O');
        k ++ ;
    }
    arrColumn.push(arrRow);
}

console.log(arrColumn);