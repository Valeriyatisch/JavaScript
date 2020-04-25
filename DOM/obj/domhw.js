function generateField(n) {
    if (n < 3)
        return;

    let luckyCell = [];
    while (true)
    {
        let index = Math.floor(Math.random() * n * n);
        if (!luckyCell.includes(index))
        {
            luckyCell.push(index);
        }
        if (luckyCell.length === 3)
        {
            console.log(luckyCell);
            break;
        }
    }

    let count = 0;
    let addDiv = document.getElementById("gamePrise");
    console.log(addDiv);
    for (let i = 0; i < n; i++)
    {
        let box = document.createElement("div");
        box.classList.add("flex-row");

        for (let j = 0; j < n; j++)
        {
            count++;
            let p = document.createElement("p");
            p.classList.add("color");
            p.textContent = "Подарок";

            if (luckyCell.includes(count))
            {
                p.setAttribute("data-prise", getGiftName(luckyCell.indexOf(count)));
                console.log(luckyCell.indexOf(count));
                console.log(getGiftName(luckyCell.indexOf(count)));
            }
                
            box.append(p);
        }
        addDiv.append(box);
    }
}


let getGiftName = (value) => {
    let mas = ["cat", "book", "car"];
    return mas[value];
};

generateField(4);

let container = document.getElementById("gamePrise");
var attempt = 3;
//let openPrise_in_var = openPrise.bind(container, attempt);
container.addEventListener("click", openPrise);
let text = document.createElement("p");
text.innerText = "Количество попыток: " + attempt;
document.body.append(text);

function openPrise(event)
{
    let clickElem = event.target; 
    //console.log("info", clickElem);
    let prise = clickElem.dataset.prise;
    
    if(prise && attempt > 0)
    {
        clickElem.innerText = getPresent()[prise];
        clickElem.classList.add("open");
        this.removeEventListener("click", openPrise);
        text.innerText = "Вы выиграли!";
    } else if(attempt > 0)
    {
        clickElem.innerText = "Пусто";
        clickElem.classList.add("open");
        attempt--;
        text.innerText = "Количество попыток: " + attempt;
    }
    else this.removeEventListener("click", openPrise);

}

let getPresent = () => { //ключи соответсвуют значениям атрибута data-present
    return {
        cat: "Кот",
        book: "Книга",
        car: "Машина"
    }
};

let masObj = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
{
    title: "Гитара",
    price: 1200,
    count: 40
},
{
    title: "Барабаны",
    price: 80000,
    count: 12
},
{
    title: "Флейта",
    price: 50000,
    count: 4
},
{
    title: "Скрипка",
    price: 20000,
    count: 14
},
{
    title: "Арфа",
    price: 200000,
    count: 2
}
];

function generateTable(mas) {
    let table = document.createElement("table");
    table.classList.add("table");
    table.setAttribute("id", "table");

    let title = table.insertRow(-1);
    title.classList.add("title");
    for(let sv in mas[0])
    {
        let cellTitle = title.insertCell(-1);
        cellTitle.innerText = sv;
    }
        
    for (let elem of mas) {
        let row = table.insertRow(-1);

        for(let key in elem){
        let cell = row.insertCell(-1);
        cell.innerText = elem[key];
    }       
    }

    document.body.append(table);
}

generateTable(masObj);

let titleEvent = document.getElementsByClassName("title")[0];

for(let j = 0; j < titleEvent.childNodes.length; j++)
    titleEvent.childNodes[j].addEventListener("click", sortTable.bind(this, j));

//console.log(titleEvent.childNodes);

function sortTable(num, event){
    
    let sortedRows = Array.from(table.rows).slice(1);
    if(num === 0)
    {
        sortedRows = sortedRows.sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
    }
    if(num === 1)
    {
        sortedRows = sortedRows.sort((rowA, rowB) => rowA.cells[1].innerHTML - rowB.cells[1].innerHTML);
    }
    if(num === 2)
    {
        sortedRows = sortedRows.sort((rowA, rowB) => rowA.cells[2].innerHTML - rowB.cells[2].innerHTML);
    }
    table.tBodies[0].append(...sortedRows);
}

