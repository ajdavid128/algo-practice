# algo-practice


# Problem 1:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes
• The number can be negative already, in which case no change is required.
• Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

# Problem 2:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false


# Problem 3:
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).


# Problem 4:
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


# Problem 5
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

# Problem 6 
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

# Problem 7
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.

# Problem 8
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case =>	return
name equals owner => 'Hello boss'
otherwise => 'Hello guest'

# Problem 9
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


# Problem 10
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321


# Problem 11
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

# Problem 12
In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1 === "Hole-in-one!"
<= par - 2 === "Eagle"
par - 1 === "Birdie"
par === "Par"
par + 1 === "Bogey"
par + 2 === "Double Bogey"
>= par + 3 === "Go Home!"

par and strokes will always be numeric and positive. 

# Problem 13
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

# Problem 14
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

# Problem 15
 Given a list of numbers, create a function that returns the first number divisible by 7 that appears.

Test Cases:
- [24, 50, 12, 7, 18, 14, 21, 82]
- [5, 48, 8, 20, 7, 22]
- [78, 3, 8, 33, 32, 90, 63]

# Problem 16
You're given two lists of n amount of numbers. All of those numbers are the exact same, except the second list has one additional number the other does not.

How do you identify the value of that second number?

For example:
[5, 65, 4, 8, 13, 27]
[5, 65, 4, 8, 12, 13, 27]

# Problem 17
FizzBuzz! Write a function that counts to 100 printing each number along the way. Every time the program comes across a number that is divisible by 3 print the string "Fizz" and every time it comes across a number that is divisible by 5 print the string "Buzz". In addition to printing the words separately, print the string "FizzBuzz" for every number divisble by both 3 and 5.

# Problem 18
Writre a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######

# Problem 19
Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard. Passing this string to console.log should show something like this:
  # # # #
 # # # # 
  # # # #
 # # # # 
  # # # #
 # # # #
  # # # #
 # # # #

 When you have a program that generates this pattern, define a variable (const size = 8) and change the program so that is works for any size, outputting a grid of the given width and height.