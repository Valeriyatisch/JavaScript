//1.

let n = 453;
n = String(n).split("");

let sumN = 0;
for (let elem of n)
    sumN += Number(elem);

console.log(sumN);

n = n.join("");


//2.

let num = Math.floor(Math.random() * 118 + 5);

if (num > 25 && num < 100)
    console.log("Число ", num, "содержится в интервале (25, 100)");
else console.log("Число ", num, "не содержится в интервале (25, 100)");

//3.

let size = prompt("Введите число");
let rep = /[-\.;":'/a-zA-Zа-яА-Я]/;
let empty = /^\s*$/;


while(empty.test(size) || rep.test(size))
{
    size = prompt("Введите число");
}

let mas = [];
for (let i = 0; i < size; i++)
    mas[i] = Math.floor(Math.random() * 10 - 3);

console.log(mas);

let min = mas[0]; let max = mas[0]; let average = 0;
for(let elem of mas)
{
    if(elem > max)
    max = elem;

    if(elem < min)
    min = elem;

    average += elem;
}

console.log("Максимальное значение: ", max, ", минимальное значение: ", min, ", среднее значение: ", average/mas.length);


//4.

let check = /[-\.;":'/a-zA-Zа-яА-Я]/;
let nN = prompt("Введите натуральное число больше 3");

while (nN < 4 || check.test(nN))
{
    nN = prompt("Введите число");
}

let masInt = [];
let N = Number(nN) + 1;

for(let i = 0; i < nN; i++)
{
    masInt[i] = Math.floor(Math.random() * N);
}

console.log(masInt);

let masEven = [];

for (let i = 0; i < masInt.length; i++)
{
    if (masInt[i] % 2 === 0)
        masEven.push(masInt[i]);
}

if (masEven.length > 0)
    console.log(masEven);
else console.log("В массиве нет четных элементов");