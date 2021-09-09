// In The name of God
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

/* Boolean */

/*
true
false
*/

typeof true // boolean

/*
== equal value
=== equal value and equal type
!== not equal type or value
> greather than
<
>=
<=
!= not equal
*/

// ternary
let a = (12 > 10) ? true : false
let nm1 = 20;
/*
nm1 == 20 true
nm1 == '20' true
nm1 === '20' false
*/

/* who are vlue is false?? */

let nm = 0;
let nmToStr = String(nm);
let myName = "AmirMahdy";
Number(myName); // Nan = Not a number
Boolean(); // false
Boolean(0); // false
Boolean(1); // true
Boolean(150); // true
Boolean(-4.5); // true
Boolean(''); // false
Boolean('0'); // true

/* null and undefined */

let first_name1;

typeof first_name1; // undefined

let ageOfUser = null;

typeof age; // object


/* Arrays */

let students = ['AmirMahdy', 'AmirSobhan', 'Roham', 'Abolfazl', 4, "AmirAli"]; // create a array

console.log(students.length); // array part number
console.log(students[0]); // first part of array
console.log(typeof students[0]); // String
console.log(typeof students); // object
console.log(students); // print array

console.log(students.toString()); // change array to string
console.log(students.join(" | ")); // create array to string for example "AmirMahdy | AmirSobhan | ..."
// let data = students.join(" | "); 
// console.log(data.split(" | ")); // change string to array

students.push('Poria'); // add item to tail of array
students.pop(); // remove item from tail of array
students.shift(); // remove item from head of array
students.unshift("Saeed Shahrivari"); // add item to Head of array
students.splice(1,2); // remove index 1 and 2 [(1,3) => remove index 1,2,3]
students.splice(1,0,'Roham B'); // insert 'Roham B' to index 1
students.splice(1,1,'Roham B'); // replace 'AmirSobhan' with 'Roham B'

let newStudents = students.slice(0); // copy array
let newStudents = students.slice(0, 2);  // cut a slice from array

console.log(students.sort()) // sort array
console.log(students.sort().reverse()) // reverse sort array
console.log(students.reverse()) // reverse array

let numbers = [1, 2, 25, 65, 85, 4];
// console.log(numbers.sort()) // NO!!!
console.log(numbers.sort((a, b) => a-b)); // sort numbers
console.log(numbers.sort((a, b) => b-a)); // reverse sort numbers

console.log(students.includes("AmirMahdy")); // is there "AmirMahdy" in Array
students = students.concat(['AmirReza', 'Mohammad Mehdi']) // plus arrays
console.log(indexof("AmirMahdy")); // index of 'AmirMahdy'
console.log(indexof("asd")); // return -1
numbers.find((n) => n > 10); // return first number if number > 10
numbers.filter((n) => n > 10); // return all number if number > 10

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix[3][2]);



/*
Writed by AmirMahdy Turani
CC by Sa 2021
teacher: mehran tarif 'github.com/mtarif98'
*/
