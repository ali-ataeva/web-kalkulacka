let display = document.getElementById("display")

let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let zero = document.getElementById("zero")
let doubleZero = document.getElementById("double-zero")
let comma = document.getElementById("comma")
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let add = document.getElementById("add")
let subtract = document.getElementById("subtract")

let percent = document.getElementById("percent")
let AC = document.getElementById("AC")
let equals = document.getElementById("equals")

let numbers = [
    seven, eight, nine, four, five, six,
    one, two, three, zero, doubleZero, comma
]
let operators = [multiply, divide, add, subtract]

let equal = [equals]
let percentButton = [percent]

let displayValue = null
let A = 0
let operator = null
let B = null

function parse(string) {
    let finalNumber = parseFloat(string)
    return finalNumber
}
function math(A, B, operator) {
    let result;
    switch (operator) {
        case "*":
            result = parse(A) * parse(B);
            break;
        case "/":
            result = parse(A) / parse(B);
            break;
        case "+":
            result = parse(A) + parse(B);
            break;
        case "-":
            result = parse(A) - parse(B);
            break;
        default:
            result = null;
    }
    return result;
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (displayValue === null) {
            displayValue = number.value
        } else {
            displayValue += number.value
        }
        display.value = displayValue
        if (operator === null) {
            if (A === 0) {
                A = number.value
            }
            else {
                A += number.value
            }
        }
        else {
            if (B === null) {
                B = number.value
            } else {
                B += number.value
            }
        }
    })
})
operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (operator === null) {
            displayValue += op.value
            display.value = displayValue
            operator = op.value
        }
        else if (operator !== null) {
            console.warn("Už jste zadali operátor");
        }
    })
})
percent.addEventListener("click", () => {
    displayValue = parse(A) / 100
    display.value = displayValue

})
AC.addEventListener("click", () => {
    displayValue = null
    display.value = displayValue
})
equals.addEventListener("click", () => {

    result = math(A, B, operator)
    displayValue = result
    display.value = displayValue
})



