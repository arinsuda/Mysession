console.log("----------------------------------------------------------------------------------")
//object literal
console.log("Object literal")
const p1 = {x:10,y:20}
const p2 = {x:5,y:10}
console.log(p1)
console.log(p2);
//เป็น obj. ที่ไม่ต้องใช้คำสั่ง new สร้างได้ง่ายเวลาจะสร้างอะไรที่เหมือนกันต้อง copy code มา
console.log("----------------------------------------------------------------------------------")

//Constructor function
console.log("Constructor function")
function Point(x,y) {
    this.x = x
    this.y = y
}
const x1 = new Point(1,2)
const x2 = new Point(2,4)
console.log(x1); //Point { x: 1, y: 2 }
console.log(x1.x); //1
console.log(x1.y); //2
console.log(x2); //Point { x: 2, y: 4 }
// เขียน contructor ตัวเดียวแล้วสร้าง new object มาใช้
console.log("----------------------------------------------------------------------------------")

//ESG Classes
class Pointer {
    constructor(x,y){
        this.x = x
        this.y = y
    }
    distance(anotherPoint){
        return Math.sqrt((this.x - anotherPoint.x) ** 2 + (this.y - anotherPoint.y) ** 2) 
        //Exponentiation operator(**)
    }
}
const z1 = new Pointer(1,2)
const z2 = new Pointer(10,20)
console.log(z1.distance(z2));//20.12461179749811
//สร้าง class ที่มี property และ method เหมือน java 
//สามารถใช้ object literal ได้เหมือนกันถ้าไม่อยากใช้ class เพื่อความยุ่งยาก
console.log("----------------------------------------------------------------------------------")
//Object craete
const person = {personId: 101, firstname: 'Somsak', lastname: 'Jaidee'}
const student = Object.create(person) //สืบทอดคุณสมบัติของ person มาทำให้สามารถเรียกใช้ คุณสมบัติ person ผ่าน student ได้โดยที่ใน student ไม่ได้มีคุณสมับติ personId, firstname, lastname
student.studentId = 65130500088
console.log(person); //{ personId: 101, firstname: 'Somsak', lastname: 'Jaidee' }
console.log(student); //{ studentId: 65130500088 }
console.log(student.studentId); //65130500088
console.log(student.personId); //101
console.log(student.firstname); //Somsak
console.log(student.lastname); //Jaidee
