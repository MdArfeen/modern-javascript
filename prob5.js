//scope comparison

/*
function testvar(){
    if(true){
        var x=10;
        console.log("inside block using var:",x)
    }
    console.log("outside block using var:",x)
}

function testlet(){
    if(true){
        let y=20;
        console.log("inside block using let:",y)
    }
    console.log("inside block using let:",y)
}
testvar()
testlet()
*/

//Constant variables
/*
function createConstArray() {
    const arr = [1, 2, 3];
  
    // Adding an element to the array is allowed
    arr.push(4);

  
    console.log(arr); // Output: [1, 2, 3, 4]
  }
    */
  //Explainatio:using const with arrays provides a degree of immutability, preventing accidental reassignments.
 //  However, it doesn't prevent modifications to the array's contents using methods that don't involve reassigning the entire array.
   ///This is a common pattern in JavaScript to ensure data integrity and avoid unintended side effects.

   //Tempororal Dead Zone

/*

   function TemporaryTDZ() {
    console.log(x); 
  
    let x = 10;
  
    console.log(x); 
  
    var y;
    console.log(y);
    y = 20;
    console.log(y); 
  }
  
  TemporaryTDZ();
  */


  //Re-dclartion of variables

  /*
  function testRedecleration() {
    var x = 10;
    console.log(x);
  
    var x = 20; 
    console.log(x);
  
   
  }
  
  testRedecleration();
  */

  //Block Scope and loop

  /*
  function loopWithVarAndLet() {
    
    for (var i = 0; i < 3; i++) {
      console.log("Inside loop (var):", i);
    }
    console.log("After loop (var):", i);
  
   
    for (let j = 0; j < 3; j++) {
      console.log("Inside loop (let):", j);
    }
}
  
  loopWithVarAndLet();
  */