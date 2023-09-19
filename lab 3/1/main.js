let divArr = document.querySelectorAll('p');
let divTextArr = [];

for(let i = 0; i < divArr.length; i++){
    divTextArr.push(divArr[i].innerText.length);
}
console.log(divTextArr);

let arr = [20, 17, 4, -4, 10,  -9, 13, 4, 12, 22, 13, 19, 1, 3];

//#1 min max
let min = arr[0];
let max = arr[0];

for(let i = 0; i < arr.length; i++){
    if(max > arr[i]) //Max
        max = arr[i]

    if(min < arr[i]) //min
        min = arr[i]
}
console.log(`1. min ${min}, max ${max}.`)

let pair = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0)
        pair++;
}
console.log(`2. pair ${pair}, not pair ${arr.length - pair}.`)

let count = 0;
for(let i = 0; i < arr.length; i++){
    if(Math.abs(arr[i]).toString().length == 2) //use abs to delete "-" from all numbers
        count++
}
console.log(`3. Numbers that have more than one symbol ${count}`)

let countPos = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 0)
        countPos++;
}
console.log(`4. count of Negative numbers ${arr.length - countPos}, positive ${countPos}`);

console.log(`Sorted array: ${arr.sort()}`)
console.log(`Reversed array: ${arr.reverse()}`)