type AllIdListType = {
    [key: number]: string
}
let allIdList: AllIdListType = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "00",
    "comma",
    "multiply",
    "divide",
    "add",
    "subtract",
    "percent",
    "AC",
    "equals",
    "display"
]
type ButtonsElementType = {
    [key: number]: HTMLElement | null
}
let buttons: ButtonsElementType = []
for (let i: number = 0; i <= 18; i++) {
    let element = document.getElementById((allIdList[i]).toString())
    if (element === null) {
        continue
    }  
    buttons[i] = element
}

let operators: ButtonsElementType = []
for (let i: number = 12; i <= 15; i++) {
    if (buttons[i] === null) {
        continue
    }  
    operators[i] = buttons[i]
}
let other: ButtonsElementType = []
for (let i: number = 16; i <= 19; i++) {
    if (buttons[i] === null) {
        continue
    }  
    other[i] = buttons[i]
}

let displayValue: string = "" 
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

//numbers + comma logic
for (let i = 0; i <= 11; i++) {
    let element = <HTMLInputElement>buttons[i]
    if (element === null) {
        continue
    }
    element.addEventListener("click", () => {
        let display = <HTMLInputElement>buttons[19]
        displayValue += element.value;
        display.value = displayValue;
        (operator === "") ? (A += element.value ) : (B += element.value )
    })
}


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
    displayValue = ""
    display.value = displayValue
})
equals.addEventListener("click", () => {

    result = math(A, B, operator)
    displayValue = result
    display.value = displayValue
})
