//Basic arrow function

//
/*
let add = (a, b) => a + b;
console.log(add(5, 3));
*/

//Single line arrow function

/*
let double=(n)=>n*2;
console.log(double(5))
*/


//Arrow function with emplicit return
/*
    const greet = (name) => `Hello, ${name}`;

const message = greet("Alice");
console.log(message); 
*/

//Arrow function in callback

/*
 const filterEvennumber=(arr)=>arr.filter(num=>num%2==0)
 const arr=[1,2,3,4,5,6]
 const evennum=filterEvennumber(arr)
 console.log(evennum)
*/

//Arrow function and this context

/*
function person(name) {
    const printName = () => {
      console.log(`Hello, my name is ${this.name}`); 
    };
  
    this.name = name; 
    return printName; 
  }
  
  const john = person("John");
  john();
 */