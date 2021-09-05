console.log("this message from script file"); // log in browser's console
document.write("I am writed in html file by app.js file"); // write in html document
alert("Welcome!"); // show a alert to user

/* Variable */

let firstname = "AmirMahdy"; // define a variable
let lastname = "Turani";
let age = 14;

document.write(firstname + ' ' + lastname + "<br>"); // write variable value in html doc
document.write("<hr>"); // write html code in html doc by js

firstname = "AmirReza"; // change vlaue of

document.write(firstname + ' ' + lastname);

console.log(firstname, lastname, age); // log the vriable

const access = true; // define a construction variable
console.log(access);

// access = false; // Error

var field = "Programer"; // define a vriable by 'var' keyWord
console.log(field);
field = "Web Developer";

/* let & var */

var a = 12;
var a = 13;
// no Error

let myLet1 = 12;
// let myLet1 = 13; Error 

//############################

// Scope
{
    var a = 12;
    var myLet = 2000;
}


console.log(v);
var v = 12;
// no Error

// console.log(l);
// let l = 10; Error

/* variable name */

/*
a-z
A-Z
0-9
_
$
*/

/*
firstname
Firstname
FirstName
firstName* (use in js)
first_name
*/

/* We can not use reserved word in our variabke name */

/* Data type */

// numbers
let num1 = 3; // define a integer vriable
let num2 = 2.5; // define a float variable

/* 
+ add
- sub
* multiply
** exponen (pow())
/ devide
% modulus
++ add 1 to vriable
-- sub 1 from variable
*/

/* sqrt */

// 9 ** 0.5
// 9 ** (1/3)
// 16 ** (1/4)

// num1++
// ++num1

// num2--
// --num2

/*
=
+=
-=
*=
/=
%=
**=
*/


// let firstname = "AmirMahdy";
// let lastname = "Turani";
// let age = 23;

// let Data = "This is" + firstname + " " + lastname + " and he is " + age
// + "years old"; // string formating with +

let Data = `This is ${firstname} ${lastname} and he is ${age} years old`; // formatting with ``

console.log(Data);

/* String Method */

data = "Hello I Am AmirMahdy Turani. I am 14 years old. I am Programer and I like math becuse it is fun. I love General Haj Qasem Soleymani."
console.log(data.lenght); // get text's lenght
console.log(data.slice(0, 10)); // cut a slice from string (index 0 to 9)
console.log(data.substr(10, 4)); // cut a slice from string (index 10 to 10 until 10 + 4)
data.toLowerCase(); // change data to lower case
console.log(data.includes("AmirMahdy")); // data has "AmirMahdy" (case sensetive)
data.toUpperCase(); // CHANGE DATA TO UPPER CASE
console.log(data.search("Am")); // search first index of first "Am" in string
data.replace("Hello", "Hi"); // replace all "Hello" with "Hi"
let name = "      Amir Mahdy       ";
console.log(name.trim()); // delete space from start and end of string
data.startswith("R"); // data starts with "R" ? true or false
data.endswith("S"); // data ends with "S" ? true or false
let numPad = "5";
console.log(data.padStart(4, 0)); // 0005
console.log(data.padEnd(4, 0)); // 5000
