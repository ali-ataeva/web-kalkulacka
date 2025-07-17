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

function parse(array) {
    let singleString = array.toString()
    let finalNumber = parseFloat(singleString)
    return finalNumber
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
                A = [number.value]
            }
            else {
                A.push(number.value)
            }
        }
        else {
            if (B === null) {
                B = [number.value]
            } else {
                B.push(number.value)
            }
        }
    })
})
operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (A === 0) {
            console.warn("zadejte nejdříve číslo");
        }
        else if (operator === null) {
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
    if (A !== null && B === null && operator === null) {
        displayValue = parse(A) / 100
        display.value = displayValue
    }
})

AC.addEventListener("click", () => {
    displayValue = null
    display.value = displayValue
})


