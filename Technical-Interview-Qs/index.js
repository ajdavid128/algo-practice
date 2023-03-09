// McGraw Hill Question:

// ChatGPT Solution:
function areBracketsNested(str) {
    const stack = [];
    const openBrackets = ['(', '[', '{'];
    const closeBrackets = [')', ']', '}'];
  
    for (let i = 0; i < str.length; i++) {
      const bracket = str[i];
  
      if (openBrackets.includes(bracket)) {
        stack.push(bracket);
      } else if (closeBrackets.includes(bracket)) {
        const matchingOpenBracket = openBrackets[closeBrackets.indexOf(bracket)];
        if (stack.length === 0 || stack.pop() !== matchingOpenBracket) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

//   Here's how it works:

// 1. We initialize an empty 'stack' to keep track of open brackets.
// 2. We define two arrays: 'openBrackets' and 'closeBrackets', which contain the possible opening and closing brackets, respectively.
// 3. We loop through each character in the input string:
//      • If the character is an opening bracket, we add it to the 'stack'.
//      • If the character is a closing bracket, we check if the corresponding opening bracket is at the top of the 'stack'. If it is, we remove it from the 'stack'. If it isn't, we know the brackets are not properly nested, so we return 'false'.
// 4. After looping through the entire string, if the 'stack' is empty, we know that all brackets were properly nested and we return 'true'. If the stack is not empty, we know that some brackets were not properly nested, so we return 'false'.

// The time complexity of this function is O(n), where n is the length of the input string. The space complexity is also O(n), as the size of the 'stack' can be up to n/2 in the worst case (if all opening brackets are followed by closing brackets).