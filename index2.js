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


// Problem 4: -------------------------------------------------------------
