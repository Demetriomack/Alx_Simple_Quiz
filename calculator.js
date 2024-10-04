//Addition functon
function add(number1, number2){
    return number1 + number2,
}

//substraction function
function subtract(number1,number2) {
    return number1 - number2;
}

//Multiplication function
function multiply(number1 * number2){
    return number1 * number2;
}

//Division Function
function divide(number1,number2){

if (number2 === 0){

    return 'error: division byb zero';
}
return number1/number2
}

//Add button listener

document.getElementById(add).addEventListener(click,function(){
    const number1 =parseFloat(document.getElementById('number1').value)||0; //Handle
    const number2=parseFloat(document.getElementById('number2').value)||0;//handle
    const result =add(number1,number2);
    document.getElementById('calculation-result').textConent ="Result" +SpeechRecognitionResultList;

});

// Subtract button listener
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = "Result: " + result;
});

// Multiply button listener
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = "Result: " + result;
});


// Divide button listener
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = "Result: " + result;
});

