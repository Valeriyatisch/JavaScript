//1.

let sum = 900;

if (sum < 1000)
{
    console.log("Скидка не предусмотрена, сумма: ", sum);
} 
else if(sum >= 1000 && sum < 2000)
{
    sum -= sum * 0.05;
    console.log("Скидка 5%, сумма: ", sum);
}
else if (sum >= 2000 && sum < 3000)
{
    sum -= sum * 0.1;
    console.log("Скидка 10%, сумма: ", sum);
}
else
{
    sum -= sum * 0.1;
    console.log("Скидка 10% + подарок, сумма: ", sum);
}

//2.

let month = 'октябрь';

switch (month) {
    case 'декабрь':
        console.log("Зима");
        break;
    case 'январь':
        console.log("Зима");
        break;
    case 'февраль':
        console.log("Зима");
        break;
    case 'март':
        console.log("Весна");
        break;
    case 'апрель':
        console.log("Весна");
        break;
    case 'май':
        console.log("Весна");
        break;
    case 'июнь':
        console.log("Лето");
        break;
    case 'июль':
        console.log("Лето");
        break;
    case 'август':
        console.log("Лето");
        break;
    case 'сентябрь':
        console.log("Осень");
        break;
    case 'октябрь':
        console.log("Осень");
        break;
    case 'ноябрь':
        console.log("Осень");
        break;
    default:
        console.log("Неправильное значение");
}

//3.

let value = Math.floor(Math.random() * 7) + 1;
console.log(value);
let input = prompt("Введите число, 0 - выход из программы");

while(true)
{
    if(input == 0)
    {
        console.log("Выход");
        break;
    }

    if(input == value)
    {
        console.log("Вы угадали");
        break;
    }

    if (input > value) 
    {
        console.log("Загаданное число меньше");
        input = prompt("Введите число, 0 - выход из программы");
    }

    if(input < value)
    {
        console.log("Загаданное число больше");
        input = prompt("Введите число, 0 - выход из программы");
    }
}



//4.

let arrInt = [];

for (let i = 0; i < 10; i++)
{
    arrInt[i] = Math.floor(Math.random() * 10);
}

console.log(arrInt);
let check = false;

for (let j = 0; j < arrInt.length; j++)
{
    for (let k = j + 1; k < arrInt.length; k++) {
        if (arrInt[j] + arrInt[k] == 7) {
            console.log("индексы: ", j, ", ", k, "; элементы: ", arrInt[j], ", ", arrInt[k]);
            check = true;
            break;
        }
    }
    if (check) break;

    if (j == arrInt.length - 1)
        console.log("Таких элементов нет");
}
    