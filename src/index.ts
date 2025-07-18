let display = document.getElementById("display")


let buttons = {}
for (let i: number = 0; i <= 9; i++) {
    buttons[i] = document.getElementById(i)  
}

let doubleZero = document.getElementById("00")
let comma = document.getElementById("comma")
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let add = document.getElementById("add")
let subtract = document.getElementById("subtract")

let percent = document.getElementById("percent")
let AC = document.getElementById("AC")
let equals = document.getElementById("equals")

let numbers = [
    ...Object.keys(buttons), doubleZero, comma
]
let operators = [multiply, divide, add, subtract]

let equal = [equals]
let percentButton = [percent]

let displayValue: any = null
let A: string = "0"
let operator : string = ""
let B : string = "0"

function parse(inputNumber: string) {
    let finalNumber = parseFloat(inputNumber)
    return finalNumber
}
function math(A: string, B: string, operator: string) {
    let result;
    switch (operator) {
        case "x":
            result = parse(A) * parse(B);
            break;
        case "÷":
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
    number?.addEventListener("click", () => {
        if (displayValue === null) {
            displayValue = number.valueOf()
        } else {
            displayValue += number.valueOf()
        }
        display.value = displayValue
        if (operator === "") {
            if (A === "0") {
                A = number.valueOf()
            }
            else {
                A += number.valueOf()
            }
        }
        else {
            if (B === "0") {
                B = number.value
            } else {
                B += number.value
            }
        }
    })
})
operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (operator === "") {
            displayValue += op.value
            display.value = displayValue
            operator = op.value
        }
        else if (operator !== "") {
            console.warn("Už jste zadali operátor");
        }
    })
})
percent.addEventListener("click", () => {
    displayValue = parse(A) / 100
    display.value = displayValue

})
AC.addEventListener("click", () => {
    A = "0"
    B = "0"
    operator = ""
    displayValue = null
    display.value = displayValue
})
equals.addEventListener("click", () => {

    result = math(A, B, operator)
    displayValue = result
    display.value = displayValue
})
