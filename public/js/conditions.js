/**
 * sing the if...else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
 *
 * If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
* */
function quiz(){
    let solution = 'ECMAScript';
    let answer = prompt(`What's the “official” name of JavaScript?`);

    alert(answer === solution ? `Right!` : `You don't know? ${solution}!`);
}
/**
 * Using if...else, write the code which gets a number via prompt and then shows in alert:
 *  - 1, if the value is greater than zero,
 * - -1, if less than zero,
 * - 0, if equals zero;
 * In this task we assume that the input is always a number
* */
function showTheSign(){
    let number = prompt(`Write a number and check its sign`);

    if(number > 0) alert(1);
    else if (number < 0) alert(-1)
    else alert(0)
}

/**
 * Boolean check if the age it's within a specific rage
 * && : evaluate the first falsy value and it will return it
 * || : return the first truthy value and will show it.
 *
 * To Execute the code, copy this line of code below:
 * ```
 * alert(! (checkAge(90)) ? `Your are is from 14 to 90 years old` : `Your age is NOT from 14 to 90 years old`)
 * ```
* */
function checkAge(age){
    return age >= 14 && age <= 90;
}

/**
 * Easy login check where the user if it's an Admin
 * it will display the prompt to as a password,
 * otherwise it will show that the user doesn't exist,
 * and it will display the message "I dont' know you".
 *
 * To Execute the code, copy this line below:
 * ```
 * let user = prompt("Who's there?");
 * easyLogin(user);
 * ```
*/
function easyLogin(user){
    if(! user) return alert("Canceled");
    if(user !== "Admin") return alert("I don't know you")

    let password = prompt("Password?");

    if(! password) return alert("Canceled");
    if(password !== "The Master") return alert("Wrong Password!");

    return alert("Welcome");
}

/**
 * To Execute the code:
 * `evenNumbers();`
* */
function evenNumbers(){
    let  i = 2;
    while (i <= 10){
        if(i % 2 === 0)
            alert(i);
        i++;
    }
}

/**
 * Write a loop which prompts for a number greater than 100.
 * If the visitor enters another number – ask them to input again.
 * The loop must ask for a number until either the visitor enters a number greater
 * than 100 or cancels the input/enters an empty line.
 * Here we can assume that the visitor only inputs numbers.
 * There’s no need to implement a special handling for a non-numeric input in this task.
 *
 * To Execute the code:
 * ```
 *  validateNumber();
 * ```
* */

function validateNumber(){
    let numberToValidate = null;
    do {
        numberToValidate = prompt("Enter a number greater than 100", '0');
    }while(numberToValidate < 100 && numberToValidate)
    alert(`Congratulation you wrote a number greater than 100 that's ${numberToValidate}`);
}

/**
 * An integer number greater than 1 is called a prime if it cannot be divided without a remainder
 * by anything except 1 and itself.
 * In other words, n > 1 is prime if it can’t be evenly divided by anything except 1 and n.
 * For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
 * Write the code which outputs prime numbers in the interval from 2 to n.
 *
 * For n = 10 the result will be 2,3,5,7.
 *
 * P.S. The code should work for any n, not be hard-tuned for any fixed value.
 * To Execute the code:
 * ```
 *  let range = prompt("Insert the range you want to see the prime numbers", );
 *  primeNumberCalculator(range)
 * ```
 * */

function primeNumberCalculator(range){
    let primeNumbers = [];
    for (let i = 2; i <= range; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if(i % j === 0){
                isPrime = false;
                break
            }
        }
        if(isPrime) primeNumbers.push(i);
    }
    console.log(primeNumbers);
}
/**
 * Change a code from a switch statement into
 * an if else.
* */
function switchToIfElse(){
    let browser = prompt("Choose your browser!");
    if(browser === 'Edge') alert( "You've got the Edge!" );
    else if(browser === 'Chrome' ||
        browser === 'FireFox' ||
        browser === 'Safari' ||
        browser === 'Opera') alert('Okay we support these browser too')
    else alert('We hope that this page looks ok!')
}


/**
 * Change a code from an if-else statement into
 * a switch one.
 * */
function ifElseToSwitch(){
    let a = +prompt('a?', '');
    switch(a){
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
            break;
    }
}

function checkAgeV2(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(firstNumber, secondNumber){

    return (firstNumber < secondNumber) ? firstNumber : secondNumber;
}
/**
 * To make it works:
 * ```
 * let x = prompt("Value of x?");
 * let power = prompt(`Power of ${x} ?`);
 *
 * (+power < 0) ? console.log(`Power not supported with number below than 0`) : console.log(pow(x,power));
 * ```
* */
function pow(x, power){
    let base = x;
    for (let i = 0; i < power; i++)
        x *= base;
    return x;
}

/**
 * Function that describe which type of
 * argument you gave
* */
function describe(argument){
    switch(typeof argument){
        case "number":
            return `${argument} is a number!`;
            break;
        case "string":
            return `${argument} is a string`;
            break;
        case "boolean":
            return `${argument} is boolean`;
            break;
        case "undefined":
            return `${argument} is undefined`;
            break;
        default:
            return `${argument} is null`;
            break;
    }
}

/**
 * Create a function that get a name and its
 * fallback, that return the name if it's noted empty
 * otherwise its fallback.
 *
 * The only rule is that I should only use logical operation.
* */

function getUsername(name, fallback){
    return (name) || (fallback) || "Anonymous";
}

/**
 * Transform a function multiply(a,b) to a function expression
 * and then make it into an arrow function `() => ` smth
* */
multiply = (a, b) => a * b;