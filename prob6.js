//Rest Parameter

/*
function sum(...numbers) {
    let result = 0;
    for (const number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5));
  */
 
  //Spread With Arrays

  /*
  function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  
  const mergedArray = mergeArrays(array1, array2);
  console.log(mergedArray); 
  */

  //Spread with objects

  /*
  function updatePerson(person, updates) {
    return {
      ...person,
      ...updates
    };
  }
  
  const originalPerson = {
    name: "Alice",
    age: 30,
    city: "New York"
  };
  
  const updates = {
    age: 31,
    country: "USA"
  };
  
  const updatedPerson = updatePerson(originalPerson, updates);
  console.log(updatedPerson); 
  */

  //Rest with destrucuturing

  /*
  function extractFirstAndRestArr(arr) {
    const [first, ...rest] = arr;
    return { first, rest };
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const { first, rest } = extractFirstAndRestArr(myArray);
  
  console.log("First element:", first);
  console.log("Rest of the array:", rest); 
  */

  //Spread in function call
  /*
  function sum(...numbers) {
    let result = 0;
    for (const number of numbers) {
      result += number;
    }
    return result;
  }
  
  function calculateTotal(...args) {
    return sum(...args);
  }
  
  console.log(calculateTotal(1, 2, 3, 4, 5)); 
  */