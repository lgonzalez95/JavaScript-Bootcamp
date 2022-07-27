// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global Scope (varOne)
  // Local Scope (varTwo)
    // Local Scope (varFour)
  // Local Scope (varThree)

  let varOne = 'varOne';

  if (true) {
      console.log(varOne);
      let varTwo = 'varTwo';
      console.log(varTwo);
  
      if (true) {
          let varFour = 'varFour';
      }
  }
  
  if (true) {
      let varThree = 'varThree';
  }
  
  console.log(varTwo);



  // Global
  // Local
    // Local (name)
  // Local

///let name = 'Andrew'

if (true) {
    //let name = 'Mike'

    if (true) {
        let name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}