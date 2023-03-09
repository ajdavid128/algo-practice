// Problem 1:

function makeNegative(num) {
    if (num > 0) {
        return num *= -1
      } else {
        return num
    };
};


// Problem 2:

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