// Problem 1: -------------------------------------------------------------

function makeNegative(num) {
    if (num > 0) {
        return num *= -1
      } else {
        return num
    };
};


// Problem 2: -------------------------------------------------------------

// My attempt: Incorrect
function validatePIN (pin) {
    let test = Math.abs(pin)
    if ( Number.isInteger(test) === true && pin.split('').length === 4 || pin.split('').length === 6) {
      return true
    } else {
      return false
    };
  };

// Form ChatGPT:
function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {  // Check the length of the PIN
      for (let i = 0; i < pin.length; i++) {
        if (isNaN(parseInt(pin[i]))) {  // Check if each character is a digit
          return false;
        }
      }
      return true;
    }
    return false;
  }


//   Community Solution:
function validatePIN (pin) {
    pin = pin.split('')
   const findNaN = pin.find(character => !(parseInt(character) >= 0))
    if ((pin.length === 4 || pin.length === 6) && !findNaN) {
      return true
    } else {
      return false
    }
  }


// Problem 3: -------------------------------------------------------------

// ChatGPT Solution:
function isTriangle(a,b,c)
{ if (a <= 0 || b <= 0 || c <= 0) {
  return false;
}
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

// Community Solution:
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}


// Problem 4: -------------------------------------------------------------

// ChatGPT Solution:
function toJadenCase(str) {
    let words = str.split(' '); // Split the string into an array of words using the split() method.
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }// Loop through the array of words and capitalize the first letter of each word using the toUpperCase() method on the first character of the word, and then concatenate the capitalized first character with the rest of the word using the slice() method.

    return words.join(' '); // Join the array of words back into a string using the join() method with a space as the separator.
  }


// Problem 4: -------------------------------------------------------------

function smash(words) {
  return words.join(' '); // Join the array of words back into a string using the join() and adding a space to the quotations to apply space between works.
}


