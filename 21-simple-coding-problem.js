/* প্রাকটিস চ্যালেঞ্জ-1: 

১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। */

/* function smllesltNumber(inputArray){
    let lowestNumber = inputArray[0];
    for(let i = 0; i < inputArray.length; i++ ){
        let element = inputArray[i];
        if(element < lowestNumber){
            lowestNumber = element;
        }
    }
    return lowestNumber;
}
const anArray = [120, 30, 210, 56, 80, 92];
const smallNumber = smllesltNumber(anArray);
console.log(smallNumber); */

// Another Way

/* function sN(anArray){
    let lowerNumber = Math.min(...anArray);
    return lowerNumber;
}
const result = sN(anArray);
console.log(result); */



/* / প্রাকটিস চ্যালেঞ্জ-2: 

২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  */

// Basic IF Else Using
/* let a = 300;
let b = 100;
let c = 50;
if(a < b && a < c){
    console.log(a,"Is a Small Number")
}
else if(b < a && b < c){
    console.log(b,"Is a Small Number")
}
else{
    console.log(c, "Is a Small Number")
}
 */


// Using Function PeraMeter and Math.min 
/* function smallNumber(a, b, c){
    const smallestNumber = Math.min(a,b,c);
    return smallestNumber;
}
const smallestNumber = smallNumber(23, 45, 12);
console.log(smallestNumber, "Is Smallest Number") */


// প্রাকটিস চ্যালেঞ্জ-3: 
/* 
৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। */


/* function averageAnArray(userArray){
    let sum = 0;
    for(let i = 0; i < userArray.length; i++){
        let element = userArray[i];
        sum = sum + element;
        avg = sum / userArray.length;
    }
    return avg;
}
const anArray = [20,30,40,50,60]
const functionOfArray = averageAnArray(anArray);
console.log(functionOfArray); */


/* প্রাকটিস চ্যালেঞ্জ-4: 
=========================//=========================//=========================
৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। */ 

/* function rectangle(len, height){
    let area = len * height;
    return area;
}
const ayotkketro = rectangle(5,5);
console.log(ayotkketro); */



/* প্রাকটিস চ্যালেঞ্জ-5: 

(ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  */

/* function secondLargestNumber(arrayN){
    let lergestNumber = arrayN[0];
    for(let i = 0; i < arrayN.length; i++){
        if(arrayN[i] > lergestNumber){
        lergestNumber = arrayN[i];
        }
    }
    let secondLargeNumber = arrayN[0];
    for(let i = 0; i < arrayN.length; i++){
        if (arrayN[i] > secondLargeNumber && lergestNumber > arrayN[i]) {
          secondLargeNumber = arrayN[i];
        }
    }
    return secondLargeNumber;
}
const array2 = [230, 423, 156, 278, 413, 234, 767, 642, 345];
const secondLarge = secondLargestNumber(array2);
console.log(secondLarge)
 */


