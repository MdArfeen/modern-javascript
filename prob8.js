//Basic optional chaining
/*
function getUserCity(user) {
    return user?.address?.city;
  }
  */

  //optional chaining with arrays

  /*
  function getFirstFriend(user) {
    return user?.friends?.[0];
  }
  */

  //optional chaining with function calls

  /*
  function callOptionalMethod(obj) {
    return obj?.greet?.();
  }
  
  */

  //optional chaining with nested objects
 /*
  function getNestedProperty(obj) {
    return obj?.a?.b?.c?.d;
  }
  */

  //optional chaining with default values
/*

  function getNestedProperty(obj) {
    return obj?.a?.b?.c?.d ?? "Not available";
  }
  */