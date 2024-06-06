let firstNumber = +prompt(`Enter first number:`)
    .trim();
let userAction = prompt('Choos actions: add, sub, mult, div')
    .trim()
    .toLocaleLowerCase();
let secondNumber = +prompt(`Enter second number:`)
    .trim();
console.log(userAction);
console.log(secondNumber);
console.log(firstNumber);
let checked = !isNaN(firstNumber) && !isNaN(secondNumber);
if (checked) {
    switch (userAction) {
        case 'add':
            document.write(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            break;
        case 'sub':
            document.write(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            break;
        case 'mult':
            document.write(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            break;
        case 'div':
            document.write(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            break;
        default:
            document.write(`ERROR`);
            break;
    }
}