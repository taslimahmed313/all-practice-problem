/* প্রাকটিস চ্যালেঞ্জ-1: 
=========================//=========================//=========================
১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  */


/*  function multiplicationTable(number){
    for(let i = 1; i <= 10; i++){
        let result = i * number;
        console.log(i,'x',number,'=', result)
    } 
    // return result; 
} */
// let result = multiplicationTable(13);



/* ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে। */

/* function uppercaseToLowercase(input){
    let modify = input.toLowerCase();
    return modify;
}
const text = "THIS IS CAPITALIZED"
const caseConvert = uppercaseToLowercase(taxt);
console.log(caseConvert); */



/* প্রাকটিস চ্যালেঞ্জ-3: 
=========================//=========================//=========================
৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।  */

/* function fullName(firstName, lastName){
    let name = firstName + ' ' + lastName;
    return name;
}
const fullNameing = fullName('Taslim', 'Ahmed');
console.log(fullNameing); */



/* / ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  */

/* function powerNumber(number){
    let square = number * number;
    return square;
}
const outPut = powerNumber(5);
console.log(outPut); */




/* প্রাকটিস চ্যালেঞ্জ-5: 
=========================//=========================//=========================
৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
}
এবং pepperoni প্রিন্ট করবা।  */

const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "deep dish",
  serves: 2,
};
/* // One Process 
let objectSelect = pizza.toppings;
let objectInArray = objectSelect[2];
console.log(objectInArray); */

// another Process 
// console.log(pizza.toppings[2]);



/* https://drive.google.com/file/d/1KFqqs_Nm1T7s3kBA66rDbykpghDxLa47/view?usp=sharing
// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-1: 
// =========================//=========================//=========================
// Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output. */

/* function foo(){
    console.log('foo');
    bar();
}
function bar(){
    console.log('bar');
}
foo();
 */



/* // =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-2: 
// =========================//=========================//=========================
// Write a function called make_avg() which will take an three integers and return the
// average of those values. */

/* function make_avg(num1, num2, num3){
    let addition = num1 + num2 + num3;
    let average = addition / 3;
    return average;
}
const mark1 = 30;
const mark2 = 40;
const mark3 = 50;
const getAverage = make_avg(mark1,mark2,mark3);
console.log(getAverage); */



/* =========================//=========================//=========================
প্রাকটিস চ্যালেঞ্জ-3: 
=========================//=========================//=========================
Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. */

/* function make_avg(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        let element = array[i];
        sum = sum + element;
    }
    let averageMarks = sum / array.length;
    return averageMarks;
}
let arrayExample = [32, 23, 53, 80, 50];
const additionInArray = make_avg(arrayExample);
console.log(additionInArray); */



/* =========================//=========================//=========================
প্রাকটিস চ্যালেঞ্জ-4: 
=========================//=========================//=========================
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter */

//  ● Has return + Has parameter
/* function odd_even(integerValue){
    if(integerValue % 2 == 0){
        console.log("This  is Even Number");
        return integerValue;
    }
    else{
        console.log('This Is Odd Number');
    }
}
const findEvenOrOdd =  odd_even(350); */


// ● No return + Has parameter
/* function odd_even(integerValue){
    if(integerValue % 2 == 0){
        console.log("This  is Even Number");
    }
    else{
        console.log('This Is Odd Number');
    }
}
 odd_even(425); */




/* =========================//=========================//=========================
প্রাকটিস চ্যালেঞ্জ-5: 
=========================//=========================//=========================
5) You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up. */


/* let signal = 'green';
if(signal == 'red'){
    console.log("If you try to cross the road, you may be in danger");
}
else if(signal == 'yellow'){
    console.log("You should stop");
}
else if( signal == 'green'){
    console.log("You should cross the road.");
}
else{
    console.log("Light is Defeat");
}
 */



