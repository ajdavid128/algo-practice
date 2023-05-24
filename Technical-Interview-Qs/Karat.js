/* Given a list of ordered entry and exit records, write a function that returns a list of all the people still remaining in the building at the end of the record (who entered and did not exit).

Sample input and output:

records1 = [
  ["Martha",   "enter"],
  ["Paul",     "enter"],
  ["Martha",   "exit"],
  ["Steve",    "enter"],
  ["Jennifer", "enter"],
  ["Curtis",   "enter"],
  ["Paul",     "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
  ["Curtis",   "exit"],
  ["Paul",     "enter"],
  ["Paul",     "exit"], 
  ["Curtis",   "enter"]
]

Expected output: ["Steve", "Curtis"]

records2 = [
  ["Jennifer", "enter"],  
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Jennifer", "exit"]
]

Expected output: []
*/

Complexity Discussion:
n: the length of the records array
*/
"use strict";


function name_order(a, b) {
  // let namePlace;
  for (let i = 0; i < a.length; i++) {
    if (b == a[i]) {
      return i;
    }
  }
}

function nameLog(record) {
  let individuals = [];
  for (let i = 0; i < record.length; i++) { // o(n)           | 
                                                            //| --> o(n*n) = o(n^2)
    if (individuals.indexOf(record[i][0]) == -1) { // o(n)    |
      console.log(individuals.push(record[i][0]))
    } else {
      continue;
    }
  }
  return individuals;
}

function nameLog2(record) {
  let individuals = new Set();
  for (let i = 0; i < record.length; i++) { // o(n)           | 
     individuals.add(record[i][0])
  }
  return individuals;
}
const records = [
	["Martha", "enter"],
	["Paul", "enter"],
	["Martha", "exit"],
	["Steve", "enter"],
	["Jennifer", "enter"],
	["Curtis", "enter"],
	["Paul", "exit"],
	["Martha", "enter"],
	["Martha", "exit"],
	["Jennifer", "exit"],
	["Paul", "enter"],
	["Paul", "exit"]
];

console.log(nameLog2(records))


const records1 = [
	["Martha", "enter"],
	["Paul", "enter"],
	["Martha", "exit"],
	["Steve", "enter"],
	["Jennifer", "enter"],
	["Curtis", "enter"],
	["Paul", "exit"],
	["Martha", "enter"],
	["Martha", "exit"],
	["Jennifer", "exit"],
	["Curtis", "exit"],
	["Paul", "enter"],
	["Paul", "exit"],
	["Curtis", "enter"]
];

const records2 = [
	["Jennifer", "enter"],
	["Paul", "enter"],
	["Paul", "exit"],
	["Paul", "enter"],
	["Paul", "exit"],
	["Jennifer", "exit"]
];







/*
let count = 0;
for (let i = 0; i < 10; i++) { 
  for (let j = 0; j < 10; j++) { 
    console.log(++count)
  }
}

https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/
*/