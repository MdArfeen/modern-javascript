//Basic object Shorthand
/*
function createPerson(name,age){
    
    return {
        name,
        age
};
}
let hi=createPerson("akash",43)
console.log(hi)
*/

//Method Sorthand

/*
function createPerson() {
    const person = {
      name: "Bob",
      greet() {
        return `Hello, ${this.name}`;
      }
    };
  
    return person; 
  }
  
  const bob = createPerson(); 
  console.log(bob.greet()); 
   */
  //computed property names

  /*
  function createobject(key,value){
    let obj={
        [key]:value,
    }
    console.log(obj)
  }

  createobject("cap01",12)
  */

  //Object Shorthand with destructuring
/*
  function mergeObjects(obj1, obj2) {
    return {
      ...obj1,
      ...obj2
    };
  }
  
  const object1 = { name: "Alice", age: 30 };
  const object2 = { city: "New York", job: "Engineer" };
  
  const mergedObject = mergeObjects(object1, object2);
  console.log(mergedObject); 
  */

  //Advance Shortage and usage 

  /*
  function updatePerson(oldPerson, newName) {
    return {
      ...oldPerson,
      name: newName
    };
  }
  
  const person = { name: "Alice", age: 30, city: "New York" };
  const updatedPerson = updatePerson(person, "Bob");
  
  console.log(updatedPerson); 
  */