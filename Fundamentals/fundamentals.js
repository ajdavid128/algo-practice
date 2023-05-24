FUNDAMENTALS

////////////////////////// PROBLEM #1 //////////////////////////

function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
  }

////////////////////////// PROBLEM #2 //////////////////////////

function findShort(s){
    let arr = s.split(' ');
    let lengths = [];
    arr.map(e => lengths.push(e.length));
    lengths.sort((a,b) => a-b);
    return lengths[0];
  }

// Community Solution 1:
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

// Community Solution 2:
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

////////////////////////// PROBLEM #3 //////////////////////////

function invert(array) {
    return array.map(i => i * -1);
 }

////////////////////////// PROBLEM #4 //////////////////////////
function sum(arr) {
  return arr == [] ? 0 : arr.reduce((a,b) => a+b)
}


////////////////////////// PROBLEM #5 //////////////////////////
function countSheeps(arr) {
  let count = 0;
  arr.map(e => {
    if (e === true) {
      count += 1;
    }
  })
  return count;
}

// Community Solution:
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

////////////////////////// PROBLEM #6 //////////////////////////
function min(list){
  list.sort((a,b) => a-b)
  return list[0];
}

function max(list){
  list.sort((a,b) => a-b)
  return list[list.length - 1];
}

// Community solution:
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// Community solution 2:
var min = function(list){
  list.sort((a, b) => (a - b));
  return list[0];
}

var max = function(list){
  list.sort((a, b) => (b - a));
  return list[0];
}


////////////////////////// PROBLEM #7 //////////////////////////
function removeExclamationMarks(s) {
  return s.replaceAll('!','') 
}

function removeExclamationMarks(s) {
  return s.replace(/!/g,'') 
}

// Using RegEx in this way removes all instances of the chosen character. Along with the global attribute (g), it will select every instance of the string and allow you to remove it.


////////////////////////// PROBLEM #8 //////////////////////////
function abbrevName(name){
  let arr = name.split(' ');
  let abbr = '';
  abbr = arr[0][0] + '.' + arr[1][0];
  return abbr.toUpperCase();
}

// Community Solution:
function abbrevName(name){
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

////////////////////////// PROBLEM #9 //////////////////////////
function findDifference(a, b) {
  return Math.abs(a.reduce((a,b) => a*b) - b.reduce((a,b) => a*b))
}

////////////////////////// PROBLEM #10 //////////////////////////
function squareSum(n){
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i] * n[i]
  }
  return sum;
}

function squareSum(n){
  return n.map(e => e * e).reduce((a,b) => {a+b},0)
  }
  // the reduce method allows for an initial value to be set - i.e. the 0 after the comma


////////////////////////// PROBLEM #11 //////////////////////////