//1.

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

let from, to;
let check = /[-\.;":'/a-zA-Zа-яА-Я]/;

while (true)
{
    from = prompt("Введите число или exit - для выхода");
    if (from === "exit" || !(check.test(from))) break; 
}

while (true) {
    to = prompt("Введите число или exit - для выхода");
    if (to === "exit" || !(check.test(to))) break;
}

let sort = {};

for (let n in goods) {
    if (goods[n].price >= Number(from) && goods[n].price < Number(to))
        sort[n] = goods[n];
}

console.log(sort);

//2.
let title = prompt("Введите название товара");
let countToCart;
while (check.test(countToCart)) {
    countToCart = prompt("Введите число");
}

for (let n in goods) {
    if (n === title)
    {
        if (goods[n].count > countToCart)
            goods[n].count -= countToCart;
        else console.log("Количество товаров меньше заданного числа");
    }
}

console.log(goods);

//3.

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы' },
    { author: 'Толстой', title: 'Война и мир' },
    { author: 'Лермонтов', title: 'Тамань' },
    { author: 'Гончаров', title: 'Обломов' },
    { author: 'Лермонтов', title: 'Герой Нашего Времени' },
    { author: 'Пушкин', title: 'Руслан и Людмила' },
    { author: 'Лермонтов', title: 'И скучно, и грустно' },
];

let author = prompt("Введите имя автора");
let searchAuthor = [];

for(let elem in books)
{
    if(books[elem].author === author)
        searchAuthor.push(books[elem]);
}

if(searchAuthor.length === 0)
    console.log("Такого автора нет");
else console.log(searchAuthor);

