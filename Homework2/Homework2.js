//1.

let stringArr = [];

for (let i = 0; i < 3; i++) {
    stringArr[i] = [];
    for (let j = 0; j < 6; j++)
        stringArr[i][j] = Math.floor(Math.random() * 199 - 99);
}

console.log(stringArr);

let max = stringArr[0][0];
let index_1, index_2;

for (let i = 0; i < stringArr.length; i++)
    for (let j = 0; j < stringArr[i].length; j++) {
        if (stringArr[i][j] > max) {
            max = stringArr[i][j];
            index_1 = i;
            index_2 = j;
        }
    }

console.log("индекс: ", index_1, ", ", index_2, " значение: ", max);

//2.

let str = prompt("Введите строку!");

while (!str)
{
    str = prompt("Введите строку!");
}

str = str.replace(/[\s!@#":^№`~$&*().,%]/g, '');

let substr = prompt("Введите строку!");

while (!substr)
{
    substr = prompt("Введите строку!");
}

substr = substr.replace(/[\s!@#":^№`~$&*().,%]/g, '');

//console.log(str, substr);

let index = 0; let count = 0;

while (true) 
{
    let found = str.indexOf(substr, index);
    if (found == -1) break;

    index = found + 1;
    count++;
}

console.log("Найдено вхождений: ", count);

//3.

let upStr = prompt("Введите строку!");

while (!upStr) {
    upStr = prompt("Введите строку!");
}

upStr = upStr[0].toUpperCase() + upStr.slice(1);
console.log(upStr);

//4.

let animal = ['dog', 'cat', 'rabbit', 'mouse'];

let pos = animal.indexOf('cat');
if(pos !== -1) animal.splice(pos, 1);
console.log(animal);