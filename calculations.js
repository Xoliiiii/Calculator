//Addition Sum
function addSum(){
    alert("adding")
}

let addition = document.querySelector("#plus");
addition.addEventListener("click" , addSum);


//Subtraction sum

function minusSum(){
    alert("subtracting")
}

let subtraction = document.querySelector("#minus");
subtraction.addEventListener("click" , minusSum);

//Division sum

function divideSum(){
    alert("dividing")
}

let division = document.querySelector("#divide");
division.addEventListener("click" , divideSum);

//Multiplication sum

function multiplySum(){
    alert("multipling")
}

let multiplication = document.querySelector("#multiply");
multiplication.addEventListener("click" , multiplySum);


//JavaScript to update the display 

function updateDisplay(value){
    document.getElementById('calculatorDisplay').innerText = value
}

//Removing numbers on the calculator

function removeNumbers(){
    document.getElementById('calculatorDisplay').innerText = '0';
}

let clear = document.querySelector("#clear");
clear.addEventListener("click" , removeNumbers)


//Function to update display when number is clicked 

function updateDisplay(event){
    const display = document.getElementById('calculatorDisplay');
    const clickedNumber = event.target.getAttribute('data-number');


    //Replace when displays 0 , otherwise append the number
    if (display.innerText === '0') {
        display.innerText = clickedNumber;
    } else{
        display.innerText += clickedNumber;
    }

}

//Attaching event listener to number buttons

const buttons = document.querySelectorAll('.button[data-number');
buttons.forEach(button => {
    button.addEventListener('click' , updateDisplay)
});

//Function to add the sum together 

let currentInput = '0';
let previousInput = ' ';
let operator = ' ';