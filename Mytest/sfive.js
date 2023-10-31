//Object Destucturing => แยกโครงสร้าง
const students = {
    id:1001,
    fullname: 'Somchai Jaidee',
    email: 'somchai@example.com'
}

let id = students.id
let fullname = students.fullname
let email = students.email

console.log(id); //1001
console.log(fullname); //Somchai jaidee
console.log(email); //Somchai@example.com

const student1 = {
    id1:1001,
    fullname1:'Somchai Jaidee',
    email1: 'somchai@example.com'
}

let {id1,fullname1,email1} = student1

console.log(id);
console.log(fullname);
console.log(email);

//Array
let a, b, rest;
[a, b] = [5, 10]

console.log(a);
console.log(b);

[a, b, ...rest] = [5, 10, 15, 20, 25]
console.log(rest); //[15,20,25]

//Object
({a,b} = {a:10,b:20})
console.log(a); //10
console.log(b); //20

({a,b, ...rest} = {a:10,b:20,c:30,d:40})
console.log(a); //10
console.log(b); //20
console.log(rest); //{c:30, d:40}

//Nested Object Destructuring
const msg = {
    sender:'Somsak',
    recipient:'Pornsuda',
    content: {
        header: 'Reminder our party',
        body: 'let see you in the party'
    }
}
const {content:{header}} = msg
console.log(header);//Reminder our party

//splice
const fruits = ['apple','banana','cherry']
fruits.splice(1,0,'orange')
console.log(fruits);
fruits.splice(2,2);
console.log(fruits);
fruits.splice(1,0,'orange','Tomato')
console.log(fruits);
fruits.splice(1,1,'yellow')
console.log(fruits);

const numbers = [5, 5, 5, 5, 5];

// ใช้ reduce() เพื่อรวมค่าของสมาชิกทั้งหมดเข้าด้วยกัน
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15


const num = (a,b) => a+b+100
console.log(num(10,20));

const nummer = [1,2,3,4,5,6]
const selectedNumbers = nummer.slice(1, 4);
console.log(selectedNumbers);
const joinedString = nummer.join(', ');
console.log(joinedString);
const hasValue = nummer.includes();
console.log(hasValue)
const moreNumbers = [6, 7, 8];
const combinedNumbers = numbers.concat(moreNumbers);
console.log(combinedNumbers);