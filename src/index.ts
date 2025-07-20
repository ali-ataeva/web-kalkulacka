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
for (let i: number = 0; i <= 19; i++) {
    let element = document.getElementById((allIdList[i]).toString())
    if (element === null) {
        continue
    }  
    buttons[i] = element
}

let displayValue: string = "" 
let A: string = "0"
let operator : string = ""
let B : string = "0"
let display = <HTMLInputElement>buttons[19]

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
    let numberElement = <HTMLInputElement>buttons[i]
    if (numberElement === null) {
        continue
    }
    numberElement.addEventListener("click", () => {
        displayValue += numberElement.value;
        display.value = displayValue;
        (operator === "") ? (A += numberElement.value ) : (B += numberElement.value )
    })
}

//operators logic
for (let i = 12; i <= 15; i++) {
    let operatorElement = <HTMLInputElement>buttons[i]
    if (operatorElement === null) {
        continue
    } 
    if (operator === "") {
        displayValue += operatorElement.value
        display.value = displayValue
        operator = operatorElement.value
    }    
}

// percent logic
let percentElement = <HTMLInputElement>buttons[16]
if (percentElement !== null) {
    percentElement.addEventListener("click", () => {
        displayValue = (parse(A) / 100).toString()
        display.value = displayValue

    })
}

// AC logic
let ACElement = <HTMLInputElement>buttons[17]
if (ACElement !== null) {
    ACElement.addEventListener("click", () => {
        A = "0"
        B = "0"
        operator = ""
        displayValue = ""
        display.value = displayValue
    })
}

// equals logic
let equalsElement = <HTMLInputElement>buttons[18]
if (equalsElement !== null) {
    equalsElement.addEventListener("click", () => {
        let result = math(A, B, operator)
        if (result !== null) {
            displayValue = result.toString()
            display.value = displayValue
        }
        
    })
}

