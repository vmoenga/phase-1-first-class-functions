function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      console.log("This is a named function.");
    }
    // Return the named function
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  
  // Example usage:
  receivesAFunction(function() {
    console.log("Callback function called.");
  });
  
  const namedFunction = returnsANamedFunction();
  namedFunction(); // Output: "This is a named function."
  
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction(); // Output: "This is an anonymous function."
  