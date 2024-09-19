//Array Destructuring

/*
function swap(a,b){
[a,b]=[b,a]

}
let x=10;
let y=20
swap(x,y)
console.log("x:",x)
console.log("y:",y)
*/

//object destrucuting

/*
let { name, age } = { name: "John", age: 30 };
console.log(name); // Output: John
console.log(age); // Output: 30
*/

//Nested Destructuring

/*
function extractNestedData(obj) {
    const { name: { first, last }, age } = obj;
    return { first, last, age };
  }
  
  const person = {
    name: {
      first: "John",
      last: "Doe"
    },
    age: 30
  };
  
  const extractedData = extractNestedData(person);
  console.log(extractedData); 
  */

  //Default values in Destructuring

  /*
  let coordinates = [29, 30];
let [x, y] = coordinates;
console.log(x, y); 

let user = { id: 1, username: "johndoe" };
let { id, username } = user;
console.log(id, username);

*/

//Rest in Destrucuring

/*
function getUserInfo(users) {
    const { name, ...rest } = users;
    return { name, rest };
  }
  
  const user = {
    name: "Alice",
    age: 30,
    city: "New York"
  };
  
  const { name, rest } = getUserInfo(user);
  console.log("Name:", name); 
  console.log("Rest:", rest); 
  */