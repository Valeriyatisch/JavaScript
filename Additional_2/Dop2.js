//1.

let wordOne = 'orange';
let wordTwo = 'book';
let newWord = "";

for (let i = 0; i < wordOne.length / 2; i++)
    newWord += wordOne[i];

for (let i = wordTwo.length / 2; i < wordTwo.length; i++)
    newWord += wordTwo[i];

console.log(newWord);

//2.

let sentence = "Hello tell me something i can understand";
sentence = sentence.split(" ");
let maxword = sentence[0];

for (let i = 0; i < sentence.length; i++)
{
    if (sentence[i].length > maxword.length)
        maxword = sentence[i];
}

console.log(maxword);

//3.

let str = "улица Ломоносова дом 9 корпус 1 офис 1120";
str = str.split(" ");
let numbers = [];

for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]))
        numbers.push(Number(str[i]));
}

console.log(numbers);

//4.

let someArr = [
          [5, 6, 12, -90, 9, 0], 
          [34, 67, 45, -40, 10, 98], 
          [-77, 88, 99, -99, 1, 3], 
];

console.log(someArr);

let mul = 1;
let maxmul = 0;
let index;

for (let i = 0; i < someArr.length; i++)
{
    for (let j = 0; j < someArr[i].length; j++)
    {
        mul *= someArr[i][j];
    }

    mul = Math.abs(mul);
    if (mul > maxmul) {
        maxmul = mul;
        index = i;
    }
    mul = 1;
}

console.log(index);

//5.

let mas = [];
let masCount = [0, 0, 0];

for (let i = 0; i < 11; i++)
{
    mas[i] = Math.floor(Math.random() * 3) - 1;
}

console.log(mas);

for (let i = 0; i < mas.length; i++)
{
    if(mas[i] === -1)
        masCount[0]++;

    if(mas[i] === 0)
        masCount[1]++;

    if(mas[i] === 1)
        masCount[2]++;
}

if (masCount[0] > masCount[1] && masCount[0] > masCount[2])
    console.log("-1 встречается чаще всего");
else if (masCount[1] > masCount[0] && masCount[1] > masCount[2])
    console.log("0 встречается чаще всего");
else if (masCount[2] > masCount[0] && masCount[2] > masCount[1])
    console.log("1 встречается чаще всего");

