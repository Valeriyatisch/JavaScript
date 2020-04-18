//1.

function getSum(value) {
    if (value === 1)
        return 1;
    else
        return value + getSum(value - 1);
}

let n = 3;
let result = getSum(n);
console.log(result);

//2.

function getSpam(str1, str2){
    let amount = str1.split(str2).length - 1;
    let per;
    if(str1.length > 0) per = amount/str1.split(" ").length * 100;
    else return "Пустая строка";
    if( per <= 20 && per >= 0)
        return 1;
    if(per <= 40 && per > 20)
        return 2;
    if(per <= 60 && per > 40)
        return 3;
    if(per <= 80 && per > 60)
        return 4;
    if(per <= 100 && per > 80)
        return 5;
}

console.log(getSpam("Hello spam cat dog spam orange spam spam", "spam"));

//3.

function getGoods(count){

    if(count === 1 || count % 10 === 1)
        console.log(`${count} товар`);
        else if((count >= 5 && count <=20) || (count % 10 >= 5 && count % 10 <=20) || count % 10 === 0)
        console.log(`${count} товаров`);
        else console.log(`${count} товара`);
}

getGoods(55);


//4.

let users = [
     {
         login: "qwe",
         age: 34,
         city: "Москва",
         favouriteLangs: ["php", "js"]
     },
     {
         login: "asd",
         age: 23,
         city: "Москва",
         favouriteLangs: ["python", "javascript"]
     },
     {
         login: "dt56",
         age: 48,
         city: "Пермь",
         favouriteLangs: ["java", "c"]
     },
     {
         login: "rty56",
         age: 58,
         city: "Тверь",
         favouriteLangs: ["java", "scala"]
     },
     {
         login: "ght",
         age: 45,
         city: "Владивосток",
         favouriteLangs: ["php", "ruby"]
     },
];

function getLogin(usersArr, from, to = Infinity) {
    let loginArr= [];
    for(let elem in usersArr){
        if(usersArr[elem].age >= from  && usersArr[elem].age < to)
            loginArr.push(usersArr[elem].login);
    }
    return loginArr;
}

    let arrLog = getLogin(users, 28, 50);
    console.log(arrLog);

    //5.

    function getFavouriteLang(usersArr, favouriteLang){
        let loginArr= [];
        for(let elem in usersArr){
            if(usersArr[elem].favouriteLangs.includes(favouriteLang))
                loginArr.push(usersArr[elem].login);
        }
        return loginArr;
    }

    let arrLog2 = getFavouriteLang(users, "java");
    console.log(arrLog2);

    //6.


    function sortCity(someArr){
        someArr.sort(function (a, b) {
            if (a.city > b.city) {
                return 1;
            }
            if (a.city < b.city) {
                return -1;
            }
            return 0;
        });
    }

    sortCity(users);
    console.log(users);

    //-------------------------------

// TODO:: каждый элемент вложенного массива больше 0
// TODO:: каждый элемент вложенного массива увеличить на 2

 arr = [
     [1, 3, 4],
     [3, 7, 9],
     [-90, 12, -12]
 ];
 
/*
 let check = (elem, index, array) => elem > 0;

 let biggerZero = (elem, index, array) => {
     elem.filter(check);
};

 let arr1 = arr.filter(biggerZero);
 console.log(arr1);
 */
 
let plusTwo = (elem, index, array) => {
    array[index].forEach((elem, index, array) => { array[index] += 2;});
};

arr.forEach(plusTwo);
console.log(arr);
    

    
    // TODO:: возраст всех пользователей больше или равен 18

arr = [
    {
        name: "qwe",
        age: 19
    },
    {
        name: "qwe",
        age: 45
    },
    {
        name: "qwe",
        age: 16
    }
];


let sortAge = (elem, index, array) => { 
    if(elem.age > 18) 
    return elem;};

let newarr = arr.filter(sortAge);
console.log(newarr);