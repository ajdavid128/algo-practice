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

// Problem 5: -------------------------------------------------------------
function smash(arr) {
    return arr.join(' ');
}

// Problem 6: -------------------------------------------------------------
function seriesSum(n) {
//remember the denominators are going up by 3. figure out a way to calculate counting up and looping through something multiple times
}


// Problem 7: -------------------------------------------------------------

// Problem 8: -------------------------------------------------------------

// Problem 9: -------------------------------------------------------------

// Problem 10: -------------------------------------------------------------


// Problem 11: -------------------------------------------------------------


// Problem 12: -------------------------------------------------------------

// Problem 13: -------------------------------------------------------------

// Problem 14: -------------------------------------------------------------

// Problem 15: -------------------------------------------------------------


// Problem 16: -------------------------------------------------------------


// Problem 17: -------------------------------------------------------------


// Problem 18: -------------------------------------------------------------

// Problem 19: -------------------------------------------------------------

// Problem 20: -------------------------------------------------------------

