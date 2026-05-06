/**
 * Function that adds a new expense object to the expense array
 * */
function add(){
    let name = document.getElementById('name');
    let price = document.getElementById('price');
    let date = document.getElementById('date');

    console.log("Test exported function");
    valid(name.value, price.value, date.value);

    if(errors.length > 0) {
        showErrors();
        return;
    }

    expenses.push({
        'name': name.value,
        'price': Number(price.value),
        'date': date.value
    });

    name.value = price.value = date.value = '';

    showExpenses();

    total();
}

let expenses = [];
let errors = [];
let errorList = document.getElementById('error-list');
let list = document.getElementById('expenses');
let totalExpenses = document.getElementById('total');

/**
 * Function that validate each field
 * of the input data insert
 *
 * @param name
 * @param price
 * @param date
 *
 * @return array errors - an array that could contain the error message
 * for each field.
 * */
function valid(name, price, date) {
    errors = [];
    if(name.length === 0) errors.push('The name value it\'s empty');
    if(name.length > 100) errors.push('The name value it\'s too big (less than 100 characters)');
    if(price.length > 100) errors.push('The price value it\'s too big (less than 100 characters)');
    if(price.length === 0) errors.push('The price it\'s empty');
    if (date === '') errors.push('The date value it\'s mandatory');
}

/**
 * Function to display error on the HTML page,
 * it will take an array of errors and it will display them
 * on the page cremating new elements
* */
function showErrors() {
    errorList.innerText = '';

    for (let i = 0; i < errors.length; i++) {
        let li = document.createElement('li');
        li.classList.add("text-red-500", "font-medium");
        li.innerText = errors[i];
        errorList.appendChild(li);
    }
}

/**
 * Function that will show the expenses into a web
 * page, from an array of expenses it will show the expense
 * add from the user
* */
function showExpenses() {
    list.innerText = '';

    for (let i = 0; i < expenses.length; i++) {
        let li = document.createElement('li');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        p.classList.add("text-red-500", "font-bold");
        li.classList.add("flex", "items-center", "gap-2");
        p.innerText = "-$" + expenses[i]['price'];
        p2.innerText = expenses[i]['name'] + " " + expenses[i]['date'];
        li.appendChild(p);
        li.appendChild(p2);
        list.appendChild(li);
    }
}
/**
 * Function that calculate the total o all the
 * expenses
* */
function total(){
    let total = 0;
    if(expenses.length > 0){
        expenses.forEach((item) => total += item['price']);
    }
    totalExpenses.innerText =  total;
}



