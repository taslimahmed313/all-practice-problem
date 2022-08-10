/* ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
 */

/* function leapYear(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeapYear = leapYear(2023);
console.log(isLeapYear); */



/* প্রাকটিস চ্যালেঞ্জ-2: 
=========================//=========================//=========================
২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে। */


/* function numberChecker(userInput){
    if(userInput % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
const age = 24;
const oddOrEven = numberChecker(age);
console.log(oddOrEven); */


/* প্রাকটিস চ্যালেঞ্জ-3: 
=========================//=========================//=========================
৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।  */

/* function hourToMinute(hour){
    let min = hour * 60;
    return min;
}
const input = 10;
const hourInMinute = hourToMinute(input);
console.log(input,"Hour is a",hourInMinute,"minutes"); */


/* প্রাকটিস চ্যালেঞ্জ-1: 
=========================//=========================//=========================
৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে। */

/* function hourToSec(userInput){
    let sec = userInput * 60 * 60;
    return sec;
}
const hourInSec = hourToSec(1);
console.log(hourInSec); */



/* Drive TODO: https://drive.google.com/file/d/124tnpZWQ5e_6X2zifC8HE3ILe0bBuZba/view
=========================//=========================//=========================
প্রাকটিস চ্যালেঞ্জ-1: 
=========================//=========================//=========================
Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes. */

/* function hourToMinute(hour){
    let min = hour * 60;
    return min;
}
const input = 10;
const hourInMinute = hourToMinute(input);
console.log(input,"Hour is a",hourInMinute,"minutes"); */


/* প্রাকটিস চ্যালেঞ্জ-2: 
=========================//=========================//=========================
Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. */

/* function findLeapYear(array){
    let leapYearArray = [];
    for(let i = 0; i < array.length; i++){
        let year = array[i];
        if(year % 4 == 0 && year % 100 != 0 || year % 400 ==0){
            leapYearArray.push(year);
        } 
    }
    return leapYearArray;
}

const anArray = [2023, 2024, 2025, 2028, 2030];
const findArray = findLeapYear(anArray);
console.log(findArray); */



/* প্রাকটিস চ্যালেঞ্জ-3: 
=========================//=========================//=========================
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers. */

function findOddSum(input){
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        let element = input[i];
        if(element % 2 !=0){
            sum = sum + element;
        }
    }
    return sum;
}
let anArray = [5, 7, 8, 10, 45, 30];
const finalResult = findOddSum(anArray);
console.log(finalResult);

