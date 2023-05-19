// Problem 1: -------------------------------------------------------------
function makeNegative(num) {
    return num == 0 || num < 0 ? num : -num;
}

// Problem 2: -------------------------------------------------------------
function validatePIN(str) {
    if (str.length == 4 || str.length == 6) {
        if (Math.abs(str)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// Problem 3: -------------------------------------------------------------
function triangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b >= c && b + c >= a && a + c >= b) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


// Problem 4: -------------------------------------------------------------

function sum (numbers) {
    if (numbers.length == 0) {
      return 0;
    }
    let total = 0;
    numbers.map(i => total += i);
    return total;
  };

//   Community Solution: 
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }