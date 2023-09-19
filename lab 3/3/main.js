let N = 4;
let M = 4;
let arr = [
    [-1, 1, 0, 5],
    [0, 0, 0, 8],
    [-7, 0, -9, 10],
    [1, 3, 3, 1]
];
let countPos = 0;

for(let i = 0; i < N; i++){
    for(let j = 0; j < M; j++){
        if(arr[i][j] >= 0)
            countPos++;
    }
}
console.log(arr)
console.log(`1. count of positive numbers: ${countPos}`)

let rowCount = 0;
for(let i = 0; i < N; i++){
    let check = false;
    for(let j = 0; j < M; j++){
        if(arr[i][j] == 0)
            check = true
    }
    if(!check)
        rowCount++;
}
console.log(`2. count of rows without null element: ${rowCount}`)
for(let i = 0; i < N; i++){
    let check = false;
    for(let j = 0; j < M; j++){
        if(arr[i][j] == 0)
            check = true
    }
    if(!check)
        rowCount++;
}
let countCol = 0;
for(let i = 0; i < N; i++){
    let check = false;
    for(let j = 0; j < M; j++){
        if(arr[j][i] == 0)
            check = true;
    }
    if(check)
        countCol++;
}
console.log(`3. count of rows with null element: ${countCol}`)
let arrStorage = []
let previouseNum = 0;
let counter = 0;

for(let i = 0; i < N; i++){
    let storage = [];
    for(let j = 0; j < M; j++){ 
        let num = arr[i][j];
        for(let l = 0; l < M; l++){
            if(num == arr[i][l] && l != j && previouseNum != num)
                storage.push(arr[i][l])
        }
        previouseNum = num
    }
    previouseNum = NaN;
    if(storage.length != 0)
        arrStorage.push(storage)
}
let iterationIndex = arrStorage[0].length;
let index = 0;
for(let i = 0; i < arrStorage.length; i++){
    if(arrStorage[i].length > iterationIndex){
        iterationIndex = arrStorage[i].length
        index = i;
    }   
}
console.log(`4. number of row that have biggest iteration - ${iterationIndex}, element ${arrStorage[index][0]} & length: ${arrStorage[index].length}`)

console.log(`5. Mult of rows that don't have negative elements.`)
for(let i = 0; i < N; i++){
    let mult = 1;
    for(let j = 0; j < M; j++){
        if(arr[i][j] < 0){
            mult = NaN
            break;
        }
        mult *= arr[i][j];
    }
    console.log(`  ${i} - ${mult}`);
}
console.log(`6. Sum of columns that don't have negative elements.`)
for(let i = 0; i < N; i++){
    let sum = 1;
    for(let j = 0; j < M; j++){
        if(arr[j][i] < 0){
            sum = NaN
            break;
        }
        sum += arr[j][i];
    }
    console.log(`  ${i} - ${sum}`);
}

console.log(`7. Sum of columns that have negative elements.`)
for(let i = 0; i < N; i++){
    let sum = 1;
    let check = false;
    for(let j = 0; j < M; j++){
        if(arr[j][i] < 0){
            check = true;
            break;
        }
    }
    if(check)
        for(let j = 0; j < M; j++)
            sum += arr[j][i];
    else
        sum = NaN
    console.log(`  ${i} - ${sum}`);
}
function transportion(N, M, arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
        newArr.push([]);
   
    for(let i = 0; i < N; i++)
        for(let j = 0; j < M; j++)
            newArr[j][i] = arr[i][j];


    return newArr
}
console.log("8. Matrix transportion.")
console.log(transportion(N, M, arr))