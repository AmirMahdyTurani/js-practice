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

/* codition */

// define variables
let a = 1;
let b = 11;
if(b > a){
    console.log("B greather than A"); // if b > a then this line run.
}
else if (a > b){
    console.log("A greather than B"); // if a > b then this line run.
}else{
    console.log("B = A"); // else(a = b) then this line run.
}

/*

&& and
|| or
! not


false && true = false
true && true = true

false || false = false
true || false = true

!true = false
!false = true

*/

//define variable
let numberA = 10;
let numberB = 20;
let operation = '*';

// check value of operation
switch (operation) {
    case '+':
        console.log(numberA + numberB) 
        break;
    case '-':
        console.log(numberA - numberB) 
        break;
    case '*':
        console.log(numberA * numberB) 
        break;
    case '/':
        console.log(numberA / numberB)
        break; // !!!!
    default: // if cases is not right run it.
        console.log("Operation not found. Please Enter [+ - * /]:  ");
        break;
}


/* Loop */

let i = 0;
while(i < students.length){
    console.log(students[i]);
    i++
}

i = 0
do{
    console.log(students[i]);
    i++
}while(i < students.length)

for (let i = 0; i < students.length; i++) {
    console.log(students[i]); 
}


for (let i = students.length; i >= 0; i--) {
    console.log(students[i]); 
}

students.forEach((student, index) => {
    console.log(`${index + 1} - ${student}`);
    //...
    //...
    //...
    //...
    //...
    //...
});
// student => all items
// index => all index


let i = 0;
while (i < 20) {
	i++;

	if (i == 10) {
		// continue; // continue
		break;
	}

	if (i % 2 == 0) {
		console.log(i);
	}
}

/* functions */

// sayHello() // call function


// function sayHello() { // define function
//     console.log("Hello")
//     console.log("Hello Good Morning!")
// }

// sayHello() // call function

/* exprresion */

const sayHello = function () {
    console.log("Hello")
    console.log("Hello Good Morning!")
};

sayHello()
sayHello()
sayHello()
sayHello()
sayHello()
sayHello()

for (let i = 0; i <= 10; i++) {
    sayHello();    
}

/* =========================== */

function add(a = 5, b) {
    console.log(a + b);
    return a + b;
}

add(5, 7);
add(15, 7);
add(5, 58);
// add(5); // NaN => undifined + 5

function sayHello(name) {
    console.log(name)
    sayHello()
}

function isPrime(number=2) {
    let isPrime = true
    let i = 2
    while(i <= parseInt(((number ** 0.5) + 1))) { // parseInt => change variable type to integer
        if (number % i == 0) {
            isPrime = false
            break
        }
        i++
    }
    return isPrime
}

/* Arrow function */

const sayGoodMorning = () => {
    console.log("Good Morning");
}

const multiply = (a, b) => a * b;

let nums = [1,2,3,4,5,6,7,8,9]

nums.forEach((n) => console.log(n)); // Arrow function

/* Objects */

// Students => Property = name, age, field, ...  Methods = showAvg(), ...

/*
{
    key: value,
}

*/

let student = {
    firstname: "AmirMAhdy",
    lastname: "Turani",
    age: 15,
    job: "programing",
    favorite: ["AI", "web"],
    fullName(){
        return `${this.firstname} ${this.lastname}`
    },

    sayHello(){
        return `Hello ${this.fullName()}!`
    }
}

console.log(student)
console.log(student.firstname)
console.log(student.lastname)
console.log(student.age)
console.log(student.job)
console.log(student.favorite)
console.log(student.favorite.length)

console.log(student['favorite'][0])
console.log(student['favorite'][1])
let key = "age"
console.log(student[key])

student.firstname = "AmirReza"
student.age = 10
console.log(student)

console.log(student.fullName());

/*
Writed by AmirMahdy Turani
CC by Sa 2021
teacher: mehran tarif 'github.com/mtarif98'
*/
