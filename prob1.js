// Template Literals
//1. Basic String Interpolation

/*
let name = "My Name is John, and I am 25 years of old.";
let greeting = `Hello, ${name}!`; 
console.log(greeting); 
*/

/*

//multi line string

function generateParagraph(){
    let multiLine = `This is a string
that spans multiple lines.`;
console.log(multiLine);

}
generateParagraph()
*/

//expression inside temmplate literals

/*
function calculatesum(a,b){
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.

}
calculatesum(10,15)
*/

//Embedding a function in template literals

/*
function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
  }
  
  // Example usage in a template literal:
  const price = 123.456;
  const message = `The total price is ${formatCurrency(price)}`;
  console.log(message); // Output: "The total price is $123.46"
  */

  //Nested Template Literals

  function formatMessage(name, status) {
    let message = `Welcome back, ${name}!`;
  
    if (status) {
      message += ` Your status is :active`;
    } else {
      message += ` Your status is :inactive`;
    }
  
    return message;
  }
  
  const userName = "Alice";
  const userStatus = true;
  const welcomeMessage = formatMessage(userName, userStatus);
  console.log(welcomeMessage); 