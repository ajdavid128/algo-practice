/* Given an array of integers, a, in one operation one can select any two adjacent elements and replace them with their product. This operation can only be applied if the product of those adjacent elements is less than or equal to k.
The goal is to reduce the length of the array as much as possible by performing any number of operations. Return that minimum size.
Example:
Let array a = [2, 3, 3, 7, 3, 5] and k = 20
This is the list of operations that will give us the smallest array (1-based indexing):
- Merge the elements at indices (1, 2), resulting array will be - [6, 3, 7, 3, 5]
- Merge the elements at indices (1, 2), resulting array will be - [18, 7, 3, 5]
- Merge the elements at indices (3, 4), resulting array will be - [18, 7, 15]
Hence, the answer is 3.
Function Description:
Complete the function getMinLength.
getMinLength has the following
parameters:
int a[n]: an array of integers
int k: the constraint of the operation
Returns:
int: the minimum length of the array after performing any number of operations */


// ChatGPT Solution:

function getMinLength(a, k) {
    let i = 0 //i will keep track of the which index we are at in the array
    while (i < a.length - 1) {
      //using the while will let us iterate as many times as long as we have more than one element in the array
        if (a[i] * a[i + 1] <= k) {
          // creating a conditional that determines whether the product is less than or equal to k
          a[i] = a[i] * a[i + 1]
          // replacing the specific indexed element with the product of itself and its adjacent element
          a.splice(i + 1, 1);
          // using splice instead of slice allows me to remove the next element from the array
          i = Math.max(i - 1, 0);
          //this will set i back by 1, but doesn't allow it to go below 0
        } else {
          //if the previous condition isn't met, we increment i by 1 and start the loop over again
         i++;
        } 
      }
    return(a.length)
    //after the loop completes we return the length of the array 
  }

const a = [2, 3, 3, 7, 3, 5];
const k = 20;
const minLength = getMinLength(a, k);
console.log(minLength); // Output: 3

// This implementation uses a pointer i to keep track of the current position in the array a. It iterates through the array from left to right and checks if the product of the adjacent elements at i and i + 1 is less than or equal to k. If it is, it replaces the first element with their product and removes the second element from the array using splice(). The pointer i is then moved back by 1 (but not below 0) to consider the possibility of further merging after the current operation. If the product is not less than or equal to k, the pointer i is simply moved forward by 1. The remaining elements in the array after performing the operations represent the minimum length of the array.