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
let count = 0;

function cc(card) {
  if (card === 1 || card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  } else {
    count
  }
  if (count > 0) {
    return count + ' Bet'
  } else {
    return count + ' Hold'
  }
}


// ChatGPT solution:
let count = 0;

function cardCount(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      // do nothing
  }
  
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}


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
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// ChatGPT Solution:
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    records[id].tracks.push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

// Problem 24: -------------------------------------------------------------
// community solution 1
function duplicateCount(text){
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];
  
  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });
  
  return count;
}

// community solution 2
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

// community solution 3
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// community solution 4
function duplicateCount(text){
  return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
}


// ChatGPT Solution
function duplicateCount(text){
  let str = text.toLowerCase();
  const charCounts = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (!char.match(/[a-z0-9]/i)) continue;
    // .match() is a method to test against regex
    //this regex tests for alphaNumeric values and the 'i' ignores case-sensitivity

    if (!(char in charCounts)) {
      charCounts[char] = 1;
    } else {
      charCounts[char]++;
    }
  }

  let duplicates = 0
  for (const char in charCounts){
    if(charCounts[char] > 1){
      duplicates++;
    }
  }
  return duplicates;
}

// In this function, we first convert the input string to lowercase to make it case-insensitive. Then, we loop through each character in the input string, skipping non-alphabetic and non-numeric characters. We use an object charCounts to store the counts of each character. Finally, we loop through the charCounts object to count the number of characters with counts greater than 1, which gives us the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.

// Problem 25: -------------------------------------------------------------
function getCount(str) {
  let vowelCount = 0
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        vowelCount++;
        break;
    }
  }
  return vowelCount;
}

// communtiy solution
function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 }

// Problem 26: -------------------------------------------------------------
function highAndLow(str){
  let arr = str.split(' ')
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}



// Problem 27: -------------------------------------------------------------
function findUniq(arr) {
  let uniq = [...new Set(arr)]
  // this assignment creates a new array of only unique elements because Set does not allow for duplicates
  return arr[0] !== arr[1] && arr[0] !== arr[2] ? uniq[0] : uniq[1]
  //comparing the first element with the second and thrid will determine if it is either the first element in the uniq array or the second element
  }

// Problem 28: -------------------------------------------------------------
var countSheep = function (num){
  let str = ""
  let count = 0
  for (let i = 0; i < num; i++) {
    count++;
    str = str + `${count} sheep...`
  }
  return str;
}

// Problem 29: -------------------------------------------------------------
// ChatGPT solution:
function accum(str) {
  // Convert the input string to uppercase
  str = str.toUpperCase();

  // Initialize an empty array to store the result
  const result = [];

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // Append the current character repeated by its index + 1 to the result array
    result.push(char + char.toLowerCase().repeat(i));
  }

  // Join the result array with "-" and return the final string
  return result.join("-");
}

// The function first converts the input string to uppercase using toUpperCase() method to ensure consistent capitalization. Then, it loops through each character in the input string, and for each character, it appends the character itself repeated by its index + 1 to the result array, with the additional step of converting the character to lowercase using toLowerCase() method. Finally, the result array is joined with "-" using join() method to create the final string with hyphens as separators.

// Community solution:
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

// Problem 30: -------------------------------------------------------------
// ChatGPT Solution:
function sortOddNumbers(arr) {
  // Create an array to store odd numbers
  const oddNumbers = [];

  // Loop through the input array and extract the odd numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }

  // Sort the odd numbers in ascending order
  oddNumbers.sort((a, b) => a - b);

  // Loop through the input array again and replace odd numbers with sorted odd numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] = oddNumbers.shift();
    }
  }

  return arr;
}

// The function first creates an array to store the odd numbers by looping through the input array and extracting the odd numbers using the modulo operator (%). Then, it sorts the odd numbers in ascending order using the sort() method with a custom comparator function. Finally, it loops through the input array again and replaces the odd numbers with the sorted odd numbers using the shift() method, which removes the first element from the oddNumbers array.

// Community solution:
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}


// Problem 31: -------------------------------------------------------------
function maps(x){
  return x.map(e => e*2)
  }


// Problem 32: -------------------------------------------------------------
function oddOrEven(array) {
  //need to account for empty array by checking if length of the array is 0 and if it is make it have one element of 0
  if (array.length === 0) {
    array = [0]
  }
  
  if (array.reduce((a,b)=> a+b)%2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}

// Community Solution:
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  // within the reduce method they use 0 as an intial value effectively accounting for an empty array
}


// Problem 33: -------------------------------------------------------------
function points(games) {
  let count = 0
  for (let i = 0; i < games.length; i++) {
    let x = games[i].split('')
    if (x[0] === x[2]) {
      count++;
    } else if (x[0] > x[2]) {
      count = count + 3
    }
  }
  return count;
}



// Problem 34: -------------------------------------------------------------
//psuedo-code:
// need to find ratios of neg, pos, zero of arr
//intialize pos, neg and zero variables to 0
//iterate through the length of the array
//each time it loops we will check via conditional if the current index is a positive, negative or zero number
//based on the value we add 1 to the respective count variable
// when loop is finished we will reassign variable values to their respective ratios by dividing each count variable by the length of the array
//we will then recieve a float value
//will need to figure out how to get to 6 decimal places: use toFixed() method to set number of decimal places and turn value into string



function plusMinus(arr) {
  let negCount = 0
  let posCount = 0
  let zeroCount = 0
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          posCount++;
      } else if (arr[i] < 0) {
          negCount++;
      } else {
          zeroCount++;
      }
  }
  negCount /= arr.length;
  posCount /= arr.length;
  zeroCount /= arr.length;
  
  console.log(posCount.toFixed(6));
  console.log(negCount.toFixed(6));
  console.log(zeroCount.toFixed(6));
}

// Problem 35: -------------------------------------------------------------
//psuedo-code:
//first make array in ascending order using .sort() method
//initialize 2 variables: 1 for highest value and 1 for lowest
//use .reduce() method and store values into variables
//subtract arr[0] from highest variable
//subtract arr[4] from lowest variable
//console.log the values interpolated with a space between them

function miniMaxSum(arr) {
  arr.sort((a,b) => a-b);  
  let min, max
  
  min = arr.reduce((a,b) => a+b) - arr[4]
  max = arr.reduce((a,b) => a+b) - arr[0]

  console.log(`${min} ${max}`)
}


// Problem 36: -------------------------------------------------------------
//psuedo-code:
//to begin we will intialize 2 variables, hour and time
//we must take the first integer off of the string (before the first colon) and store it in the hour variable (using .substring() method)
//next we will store the rest of the separated string in the time variable (minus the AM/PM)
//from her we will use a series of conditional statements to manipulate the hour and time variables:
//first conditional will determine if it is 12am or 12 pm and will return '00' + time variable
//second conditional will determine if the hour is 12PM and will return hour + time variables
//third conditional will determine if the hour is less than 12 and it is PM and will convert the hour variable to an integer and return 12 + hour + time variables
//our last conditional will determine if the time is before 12PM and will return hour + time 


function timeConversion(s) {
  let hour, time;
  hour = s.substring(0,2);
  time = s.substring(2,8);
  if (hour == 12 && s.indexOf("AM") !== -1) {
      return '00' + time;
  } 
  if (hour == 12 && s.indexOf("PM") !== -1) {
      return hour + time;
  }
  if (1 <= hour < 12 && s.indexOf("PM") !== -1) {
      hour = Math.abs(hour)
      return (12 + hour + time)
  }
  if (hour < 12 && s.indexOf("AM") !== -1) {
      return hour + time
  }

}

// Problem 37: -------------------------------------------------------------
//psuedo-code:
//first I will sort the array by ascending values using sort method
//then I will use bracked notation to find the median value by taking the arr length - 1 divided by 2

function median(arr) {
  arr.sort((a,b) => a - b)
  return arr[(arr.length -1) / 2]
}


// Problem 38: -------------------------------------------------------------
//psuedo-code:
//sort array into ascending order
//create a loop to iterate over array, everytime the loop executes add 2 to i
//in the loop create conditional that compares current arr index with next array index and if they are not the same, return the intial array index in that loop iteration

function lonelyinteger(a) {
    a.sort((a,b) => a-b)
  for (let i = 0; i < a.length; i += 2) {
    if (a[i] !== a[i + 1]) {
      return(a[i])
    }
  }
}


// Problem 39: -------------------------------------------------------------
//psuedo-code:
//arr.length is the n number of rows and number of integers in each row
//intializing 3 variables: two with value of 0 we will use these to track the values of left-to-right and right-to-left sums of diagonals, the third will be n the arr.length value
//create a for loop that starts count at 0 and loops through until the length of n, incrementing by 1 each time the loop completes
//within the loop we will add arr[i][i] to the left-to-right variable & add arr[i][n - 1 - i] to the right to left variable
//after the loop completes we will subtract the variables that acounted for the values from the other and return the absolute value using Math.abs()



function diagonalDifference(arr) {
  let n = arr.length;
  let leftRight = 0;
  let rightLeft = 0;
  
  for (let i = 0; i < n; i++) {
      leftRight += arr[i][i];
      rightLeft += arr[i][n - 1 - i];
  }
  return Math.abs(leftRight - rightLeft);

}


// Problem 40: -------------------------------------------------------------


// Problem 41: -------------------------------------------------------------


// Problem 42: -------------------------------------------------------------


// Problem 43: -------------------------------------------------------------


// Problem 44: -------------------------------------------------------------

// Problem 45: -------------------------------------------------------------

// Problem 46: -------------------------------------------------------------

// Problem 47: -------------------------------------------------------------


// Problem 48: -------------------------------------------------------------

// Problem 49: -------------------------------------------------------------

// Problem 50: -------------------------------------------------------------