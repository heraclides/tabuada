const multplicationForm = document.querySelector('# mutiplication-form');
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicador");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

multplicationForm.addEventListener("submit", (e) => {
e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatiorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatiorNumber) return

    console.log(multiplicationNumber , multiplicatiorNumber)
    createTable(multiplicationNumber , multiplicatiorNumber)
})

const createTable = (Number, multiplicatiorNumber) => {
    multiplicationTable.innerHTML = "";

    for(let i= 1 ; i <=  multiplicatiorNumber; i++) {
        const result = Number * i;

        const template  = `<div class="row">
        <div class= "operation">${Number} x ${i} = </div>
        <div class= "result">${result}</div>
        </div>`

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerHTML = number
}