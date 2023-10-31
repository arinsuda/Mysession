//How to compare object in javaSricpt
//use == , === ในการเปรียบเทียบ object จะเทียบแค่ reference address ไม่เทียบ iteral property ดังนั้นค่า always FALSE

//Object comparing 
let student = {id:1,name:'Joe'}
let newStudent = {id:2,name:'Joe'}
let oldStudent = {id:1,name:'Joe'}
let alumniStudent = student

if(student == alumniStudent) {//true
    console.log("student equals to alumni student by ==")
    //student equals to alumni student by ==
}
if(student == newStudent) {//false
    console.log("student equals alumni student by ==")
}

if(student === alumniStudent) {//true
    console.log("student strictly equals to alumni student");
    //student strictly eqauls to alumni student by ===.
}

if(student === newStudent) {//false
    console.log("student strictly equals to new student by ===");
}
console.log("=========================================");

//manual comparison สร้าง function มาเทียบ value
//compare properties manually
function isStudentEqual(object1,object2){
    return object1.id === object2.id
}
console.log(isStudentEqual(student, oldStudent)); //true
console.log(isStudentEqual(student, alumniStudent)); //true
console.log("=========================================");

//shallow Equality เทียบทั้ง key ทั้ง value
//Shallow Equality
let book1 = {
    isbn:123456789,
    title:"JavaScript",
}

let book2 = {
    isbn:123456789,
    title:"JavaScript",
}

function shallowEquality(object1, object2) {
    const keys1 = object.keys(object1)
    const keys2 = object.keys(object2)

    if(keys1.lenght !== keys2.lenght) {//เทียบความยาวของ ค่า ใน property
        return false
    }
    for(let key of keys1) {//loop เทียบค่า ใน property
        if(object1[key] !== object2[key2]) { 
            return false
        }
    }
    return true
}
//object.key() => สร้างอาเรย์ของคุณสมบัติที่อยู่ในอ็อบเจกต์ => [isbn,title]
console.log("=========================================");

//Object Prototype ==> เป็น prototype base
//prototype chaining
//มีการสืบทอด prototype
class Rectangle{//สร้าง prototype ขื่อ rectangle
    constructor(width,height){
        this.width = width
        this.height = height
    }
    area() {//การเพิ่ม method หรือ function เข้าไปใน prototype
        return this.width * this.height
    }
}
let rec1 = new Rectangle (2,3)//สร้าง object ใหม่จาก rectangle
console.log(rec1.area())//เรียกใช้ method area() //6
//อ็อบเจกต์จะสืบทอดคุณสมบัติและเมทอดจาก prototype ของมัน 
//และจาก prototype ของ prototype นั้น ๆ และต่อไปเรื่อย ๆ จนกระทั้งถึง prototype บนสุดที่เราเรียกว่า Object.prototype.
console.log("=========================================");

//create object with Object.create()
let square = Object.create(rec1) //สร้าง object ที่สืบทอดคุณสมบัติ ของ rec1 ที่สืบทอดมาจาก object prototype
square.perimeter = function() {//เพิ่ม คุณสมบัติ perimeter เพื่อคำนวนเส้นรอบวงของ square
    return 4 * this.width
}
console.log(square.width); //2 => square จึงสามารถขึ้นไปเรียกค่าของ width & height ได้
console.log(square.height); //3
console.log(square.area()); //6
console.log(square.perimeter()); //8
console.log(Object.prototype.isPrototypeOf(rec1)); //true

console.log(Rectangle.prototype.isPrototypeOf(square)); //true 
console.log(Object.prototype.isPrototypeOf(square)); //true
console.log("=========================================");

//JSON JavaScript Object Notation ==> เป็น
//.isPrototypeOf() => ตรวจสอบว่า prototype chain ระหว่างอ็อบเจกต์มีความสัมพันธ์กันหรือไม่ , 
//ตรวจสอบว่าอ็อบเจกต์หนึ่งสามารถเป็น prototype ของอ็อบเจกต์อื่นหรือไม่

//JSON.stringfy() => javaScript เป็น JSON String
console.log(JSON.stringify({x:5,y:6}));
//OUTPUT = {"x":5,"y":6}
//จะเห็นว่า Script ของ JSON จะบังคับใส่ " " ที่ key , ห้ามมี value เป็น function

//Way to check if an Object is Empty
const EmptyObj = {}
//Way#1 - using JSON.Stringfy()
if (JSON.stringify(EmptyObj) === '{}') {
    console.log('1.EmptyObj is empty object');
}
//Way#2 - using Object.keys()
if(Object.keys(EmptyObj).length === 0)
console.log('2.emptyObj is empty object');

//spread(...) in object literal (การกระจายออก)
const obj1 = {foo: 'bar', x:42}
const obj2 = {foo: 'baz', y:13}

const clonedObj = {...obj1}
//Object {foo: "bar", x:42}
const clonedWithReplace = {...obj1,foo: 'abc'} //foo: ซ้ำจึงเปลี่ยนค่า เป็น 'abc' ใน obj1
//Object {foo: "abc", x:42}
const mergedObject = {...obj1,...obj2}//foo: ของ obj1 และ obj2 ซ้ำกันจึงกลายเป็น 'bar'
//Object {foo: "bar", x:42 , y:13}
console.log("=========================================");


