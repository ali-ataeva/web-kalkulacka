type AllIdListType = {
    [key: number]: string
}
let allIdList: AllIdListType = {
    0: "1",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
    5: "6",
    6: "7",
    7: "8",
    8: "9",
    9: "0",
    10: "00",
    11: "comma",
    12: "multiply",
    13: "divide",
    14: "add",
    15: "subtract",
    16: "percent",
    17: "AC",
    18: "equals",
    19: "display"
}
type ButtonsElementType = {
    [key: number]: HTMLElement | null
}
let buttons: ButtonsElementType = {}
for (let i: number = 0; i <= 18; i++) {
    let element = document.getElementById((allIdList[i]).toString())
    if (element === null) {
        continue
    }  
    buttons[i] = element
}

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
