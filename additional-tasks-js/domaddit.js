let books = [
    { author: 'Пушкин', title: 'Пир во время чумы', count: 2 },
    { author: 'Толстой', title: 'Война и мир', count: 0 },
    { author: 'Лермонтов', title: 'Тамань', count: 3 },
    { author: 'Гончаров', title: 'Обломов', count: 10 }
];

function output(mas) {
    let i = 0;
    for(let elem of mas)
    {
        let book = document.createElement("div");
        for(let key in elem){
        if(key == "count"){
            let output = document.createElement("input");
            output.setAttribute("id", i);
            output.value = 0;
            output.size = 5;
            output.addEventListener("blur", changeByKeyboard.bind(this, elem[key], i));

            let buttonMin = document.createElement("button");
            buttonMin.innerText = "-";
            buttonMin.addEventListener("click", changeCount.bind(this, elem[key], i));

            let buttonPlus = document.createElement("button");
            buttonPlus.innerText = "+";
            buttonPlus.addEventListener("click", changeCount.bind(this, elem[key], i));
            
            book.append(buttonMin, output, buttonPlus);
        } else {
            let information = document.createElement("p");
            information.innerText = elem[key];
            book.append(information);
        }       
    }
        document.body.append(book);
        i++;
    }
        
}

function changeCount(count, id, event){
    
    let action = event.target.innerHTML;
    let input = document.getElementById(id);
    let inputValue = input.value; 
    if(action == "-" && inputValue > 0){
        input.value = --inputValue;
    }
    if(action == "+" && inputValue < count)
    {
        input.value = ++inputValue;
    }

}

function changeByKeyboard(count, id)
{
    
    let input = document.getElementById(id);
    let check = input.value;
    check.trim();
    check = parseInt(check);
    console.log(isNaN(check));
    if(check > count)
        input.value = count;

    if( isNaN(check) || check < count)
        input.value = 0;

}


output(books);


let jsonFromServer = `[{"name":"Люся","age":"1 год","color":"трехцветная","additional_info":{"vaccinations":true,"passport":true}},
    {"name":"Том","age":"3 месяца","color":"белый","additional_info":{"vaccinations":false,"passport":false}},
    {"name":"Макс","age": "2 года","color":"серый","additional_info":{"vaccinations":false,"passport":true}},
    {"name":"Василий","age": "3 года","color":"черный","additional_info":{"vaccinations":true,"passport":true}}]`;

let objFromJson = JSON.parse(jsonFromServer); // вывод информации по массиву объектов
console.log(objFromJson);

for(let i = 0; i < objFromJson.length; i++)
{
    let name = document.createElement("h3");
    name.innerText = `${objFromJson[i].name} | ${objFromJson[i].age}`;
    let img = document.createElement("img");
    img.setAttribute("src", "https://picsum.photos/200");
    
    let div = document.createElement("div");
    div.setAttribute("class", "flex-row");
    div.style.cssText = `
        display: flex;
        flex-direction: flex-row;
        justify-content: left;`;

    let info = document.createElement("h4");
    info.innerText = "Дополнительная информация: ";

    let color = document.createElement("p");
    color.innerText = `Цвет: ${objFromJson[i].color}`;

    let doc = document.createElement("p");
    if(objFromJson[i].additional_info.passport)
        doc.innerText = "Документы: да";
    else doc.innerText = "Документы: нет";

    let priv = document.createElement("p");
    if(objFromJson[i].additional_info.vaccinations)
        priv.innerText = "Прививка: да";
    else priv.innerText = "Прививка: нет";

    let div2 = document.createElement("div");
    div2.append(info, color, doc, priv);

    div.append(img, div2);
    
    document.body.append(name, div);
}
    