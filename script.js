//adding numbers in javascript
//addition of numbers 

//addition of a and b

function add(num1,num2){
  
  return( Number(num1)+Number(num2))

};


function subtract(num1,num2){
  return(num1- num2)
};

function multiply(num1,num2){
  return(num1* num2)
};

function divide(num1,num2){
  return(num1 / num2)
};


function handleClick(){
  let a = prompt("what is the  first number you wish to add,subtract, multiply and divide");
let b = prompt("what is the  second number you wish to add,subtract, multiply and divide");

alert("addition of your age and your partner's is " + add(a,b));
alert("subtraction of your age and your partner's is " + subtract(a,b));
alert("multiplication of your age and your partner's is " + multiply(a,b));
alert("division of your age and your partner's is " + divide(a,b));
}