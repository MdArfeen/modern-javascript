//Basic default parameters

/*
function greet(name="guest") {
    return `Hello, ${name}!`;
}
console.log(greet());        
console.log(greet("Alice"));
*/

//Multiple default parameters

/*
function calculateTotalWithTax(price, tax = 0.5) {
    return price + (price * tax);
  }
  
  // Testing with tax value:
  const price1 = 100;
  const taxRate1 = 0.2;
  const total1 = calculateTotalWithTax(price1, taxRate1);
  console.log("Total price with tax:", total1); 

  const price2 = 50;
  const total2 = calculateTotalWithTax(price2);
  console.log("Total price with default tax:", total2); 
  */

  //Default parameters and undefined value

  /*
  function describeperson(name, age = 25) {
    return { name, age };
}
console.log(describeperson("Dave")); // Output: { name: 'Dave', age: 18 }
*/

//Default parametrs in complex expression

/*
function calculateDiscount(price, discount = price * 0.1) {
    return price - discount;
  }
  
  // Testing with different values:
  const originalPrice1 = 100;
  const discountRate1 = 0.2;
  const discountedPrice1 = calculateDiscount(originalPrice1, discountRate1);
  console.log("Discounted price:", discountedPrice1); 
  
  const originalPrice2 = 50;
  const discountedPrice2 = calculateDiscount(originalPrice2);
  console.log("Discounted price with default discount:", discountedPrice2); 
  */

  //Overriding default parameters

  /*
  function createUser(username, role = "user") {
    return {
      username,
      role
    };
  }
  
  // Example usage:
  const user1 = createUser("alice");
  console.log(user1); 
  
  const user2 = createUser("bob", "admin");
  console.log(user2); 
  */