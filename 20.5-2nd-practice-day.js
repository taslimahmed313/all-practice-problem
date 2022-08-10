/* 
প্রাকটিস চ্যালেঞ্জ-1:
=========================//=========================//=========================
১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে

Formula: (0°C × 9/5) + 32 = 32°F  */

/* function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
const toFahrenheit = celsiusToFahrenheit(37);
console.log(toFahrenheit);
 */



/* প্রাকটিস চ্যালেঞ্জ-2: 

২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

Formula = (32°F − 32) × 5/9 = 0°C */

/* function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
} 
const toCelsius = fahrenheitToCelsius(50);
console.log(toCelsius); */



/* প্রাকটিস চ্যালেঞ্জ-3: 

৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। */

/* function getMarks(mark){
    if(mark >= 80){
        console.log('You Get A+')
    }
    else{
        console.log('You got Another Grad')
    }
    return mark;
}
const getResult = getMarks(60); */



/* প্রাকটিস চ্যালেঞ্জ-4: 

৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।  */

// Simple Interest:
// Formula: SI = (P * T * R) / 100

/*  function simpleInterest(p, t, r) {
    var si = (p * t * r) / 100;
    return si;
}
var principleAmount = 4000;
var interestTime = 2;
var rate = 7;
var simpleInterestIs = simpleInterest(principleAmount, interestTime, rate);
console.log(simpleInterestIs); */