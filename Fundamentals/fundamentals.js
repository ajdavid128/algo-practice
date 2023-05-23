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


////////////////////////// PROBLEM #7 //////////////////////////


////////////////////////// PROBLEM #8 //////////////////////////


////////////////////////// PROBLEM #9 //////////////////////////


////////////////////////// PROBLEM #10 //////////////////////////


////////////////////////// PROBLEM #11 //////////////////////////