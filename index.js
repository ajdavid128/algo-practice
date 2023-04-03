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


// Problem 5: -------------------------------------------------------------

function smash(words) {
  return words.join(' '); // Join the array of words back into a string using the join() and adding a space to the quotations to apply space between works.
}


// Problem 6: -------------------------------------------------------------

function seriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
   sum+=  1 / (1 + i * 3);
  }
  return sum.toFixed(2)
}

/* In this solution, we use a loop to add up the terms in the series. The loop runs for n iterations, and on each iteration, we add the next term in the series to the sum variable. The terms in the series have a denominator that increases by 3 with each term, starting at 1. So, the denominator for the first term is 1, the denominator for the second term is 4 (1 + 3), the denominator for the third term is 7 (4 + 3), and so on. We calculate the denominator for each term using the formula 1 + i * 3, where i is the current iteration index.

Finally, we use the toFixed() method to round the sum to two decimal places and return it as a string.

Note that if n is 0, the loop will not run, and the function will return the string "0.00", as required by the problem statement. */



// Problem 7: -------------------------------------------------------------

function sumSum(a, b) {
  let sum = 0;
  for (let i = Math.min(a,b); i < Math.max(a,b); i++) {
    sum+= i;
  }
  return sum;
}

/* In this solution, we use a loop to add up all the integers between and including a and b. To do this, we first determine which of the two numbers is smaller and which is larger using the Math.min() and Math.max() functions. Then, we use a for loop to iterate from the smaller number to the larger number, and we add each number to the sum variable.

Finally, we return the sum variable, which contains the sum of all the integers between and including a and b. Note that if a and b are equal, the loop will run only once, and the function will return a or b. */


// Problem 8: -------------------------------------------------------------

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}


// Problem 9: -------------------------------------------------------------

function grow(x) {
  let sum = 1;
  for (let i = 0; i < x.length; i++) {
    sum *= x[i];
  }
  return sum;
}


// Community Solution:
const grow = (x) => x.reduce((a, b) => a * b);


// Problem 9: -------------------------------------------------------------

function descendingOrder(n){
  let arr = `${n}`.split("")
  let order = arr.sort((a, b) => b-a).join("")
  return Math.abs(order)
}


// Problem 10: -------------------------------------------------------------




// Problem 11: -------------------------------------------------------------

function golfScore(strokes, par) {
  if (strokes == 1) {
    return "Hole-in-one!"
  } else if (strokes <= par -2) {
    return "Eagle"
  } else if (strokes == par - 1) {
    return "Birdie"
  } else if (strokes == par) {
    return "Par"
  } else if (strokes == par + 1) {
    return "Bogey"
  } else if (strokes == par + 2) {
    return "Double Bogey"
  } else if (strokes >= par + 3) {
    return "Go Home!"
  }
} 


// Problem 12: -------------------------------------------------------------






// Problem 13: -------------------------------------------------------------

//ChatGPT Solution:
function solution(str){
  let pairs = []
  for (let i = 0; i < str.length; i += 2) {
   let newPair = str[i] + (str[i + 1] || '_');
   pairs.push(newPair)
  }
 return pairs;
}

/* Here, we start by initializing an empty array pairs to hold the pairs of characters. We then loop through the string using a step of 2, i.e., we increment the loop counter by 2 in each iteration (i += 2). In each iteration, we create a pair by concatenating the current character with the next character (or an underscore if there is no next character). We use the || operator to provide a default value of '_' in case str[i + 1] is undefined (i.e., there is no next character).

Finally, we push the pair into the pairs array and continue the loop. After the loop completes, we return the pairs array. */


// Problem 14: -------------------------------------------------------------

//ChatGPT solution:
function alphabetPosition(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (char >= 'a' && char <= 'z') {
      result += (char.charCodeAt(0) - 96) + " ";
    }
  }

  return result.trim();
}

/*Here's how it works:

We initialize an empty string called result to store the output.
We iterate through each character in the input string using a for loop.
We convert each character to lowercase using the toLowerCase() method.
We check if the character is a letter by comparing its ASCII code to the ASCII codes of 'a' and 'z'.
If the character is a letter, we convert it to its corresponding position in the alphabet by subtracting the ASCII code of 'a' (which is 97) and adding 1.
We append the resulting position to the result string followed by a space.
We return the result string after trimming any leading or trailing spaces.
Note that we're using the trim() method to remove any leading or trailing spaces from the result string. This is because we're adding a space after each position, including the last one, which can result in a trailing space.*/


// Problem 15: -------------------------------------------------------------
function divisable(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%7 === 0) {
      return arr[i];
    }
  }
}

// Problem 16: -------------------------------------------------------------
function compare(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      return b[i]
    }
  }
}

// Problem 17: -------------------------------------------------------------
let counter = 0;
while (counter < 100) {
  counter = counter += 1;
  if (counter%3 === 0 && counter%5 === 0){
    console.log("FizzBuzz");
  } else if (counter%5 === 0){
    console.log("Buzz");
  } else if (counter%3 === 0) {
    console.log("Fizz");
  } else {
    console.log(counter);
  }
}

// Problem 18: -------------------------------------------------------------
let hash = "";
for (let i = 0; i < 7; i++) {
  hash = hash + "#";
  console.log(hash);
}

// Problem 19: -------------------------------------------------------------
//Eloquent JavaScript Solution
let size = 8
let board = ""
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y)%2 == 0){
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

// Problem 20: -------------------------------------------------------------

// Problem 21: -------------------------------------------------------------
function solution(number){
  let arr = [];
  for (let i = 0; i < number; i++){
    if (i%3 === 0 || i%5 === 0){
      arr.push(i)
    }
  }
  return arr.reduce((a, b) => a + b, 0);
}

// Community Solution:
function solution(number){
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i%3 ===0 || i%5 === 0) {
      sum += i;
    }
  }
  return sum;
}


// Problem 22: -------------------------------------------------------------
// Community Solution:
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

// ChatGPT Solution:
function countCharacters(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
}


/* We define a function called countCharacters that takes a string as its parameter.
We initialize an empty object literal called result that we will use to store the counts of each character.
We loop through the string using a for loop, starting at the first character (index 0) and ending at the last character (index str.length - 1).
For each character in the string, we check if it exists as a property in the result object. If it does, we increment its count by 1. If it doesn't, we add it as a property to the result object with a count of 1.
After looping through all the characters in the string, we return the result object containing the counts of each character.
If the string is empty, the function will return an empty object literal {} because the for loop won't run at all. */


// Problem 23: -------------------------------------------------------------


// Problem 24: -------------------------------------------------------------

// Problem 25: -------------------------------------------------------------


// Problem 26: -------------------------------------------------------------


// Problem 27: -------------------------------------------------------------


// Problem 28: -------------------------------------------------------------


// Problem 29: -------------------------------------------------------------


// Problem 30: -------------------------------------------------------------