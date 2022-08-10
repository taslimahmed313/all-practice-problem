






/* নিচের ভেরিয়েবল ডিক্লেয়ার এ কোনটার মধ্যে কি কি সমস্যা আছে। দেখতো বের করতে পারো কিনা?
Var price = 33   /Var != var [caseSensitive]
var name - Shabana / var name = "Shabana"  [= and ""]
var boxName = ‘Cocola;   / 'Cocola != 'Cocola';
var 88_price = 34;      / var name can not start with number.
var enum = -1;    / "enum" is a reserved word.
var _$box’78 = ‘Monika’;  / variable name can not have '
var home-address = “kochu khet”; / variable name not to use "-" */ 

/* Drive TODO: https://drive.google.com/drive/u/1/folders/1FbntkDTYNA33BuiqJ9TVF9-YWlqvhZch
=========================//=========================//=========================
Practice Problem 1:
=========================//=========================//=========================

Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return.
Input:
The first line of the input is the taka Harry’s mom gave him.
The second line is the cost of 1 kg of oranges and 1 kg of apples.
Output:
Print the result.

Sample Input:
1000
700
Output:
300 */
// Problem-1 Simple Arithmetic Operation.
var givenMoney = 1000;
var orangePrice = 300;
var applePrice = 400;
var totalPrice = orangePrice + applePrice;
var getBack = givenMoney - totalPrice;
// console.log(getBack);


/* Practice Problem 2:
=========================//=========================//=========================

Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places.


Sample Input:
75.25, 65, 80, 35.45, 99.50
Output:
71.04 */

// Problem-2 Average Two Decimal 
var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totalMarks = mathematics + biology + chemistry + physics + bangla;
var averageMarks = totalMarks / 5;
var averageTwoDecimal = averageMarks.toFixed(2);
// console.log(averageTwoDecimal);


/*Practice Problem 3 :
=========================//=========================//=========================

John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program.
Input:
The first and the second lines of the input contain the strings.
Output:
Print the result in one line.

Sample Input:
I am going to be
an awesome web developer
Output:
I am going to be an awesome web developer 
 */

// Problem- 3 string Concat
var speech1 = 'I am going to be';
var speech2 = 'an awesome Web Developer';
var oneLineSpeech = speech1 +' '+ speech2;
// console.log(oneLineSpeech);

/* =========================//=========================//=========================
Practice Problem 4 :
=========================//=========================//=========================

Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
remainder would be if she divided the number by 5. Help Sarah write the program.
Input:
The first line of the input contains the number.
Output:
Print the remainder.

Sample Input:
119

Output:
4 */

// Problem-4 Reminder Related
var number = 119;
var reminder = number % 5;
// console.log(reminder);


