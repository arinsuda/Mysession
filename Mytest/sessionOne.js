const personPrototype = {
    greet: function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

const person1 = Object.create(personPrototype)
person1.name=("Arin")

person1.greet()

//JavaSricpt Object Examples
//Simple Object
const student = {
    name : 'Bob',
    age : 23,
    gender : 'male'
}
console.log(student)

//object Values is array
const profile = {
    id:223,
    interests: ['music','skiing']
}
console.log(profile);

const interests = profile.interests //ดึง array ออกมาจาก object , [music,skiing]
const firstItem = interests[0] //ดึง ค่า ออกมาจาก array , index ตำแหน่งที่ 0
console.log(firstItem);//music
console.log("=================================");
//การใช้ loop เพื่อเช็คค่าใน array
//for
const myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
  // ดำเนินการตามเงื่อนไขที่คุณต้องการ
  if (myArray[i] === 3) {
    console.log('ค่า 3 อยู่ในอาร์เรย์ที่ดัชนี ' + i);
  }
}
console.log("=================================");

//forEach
const myArray1 = [1, 2, 3, 4, 5];

myArray1.forEach((value, index) => {
  if (value === 3) {
    console.log('ค่า 3 อยู่ในอาร์เรย์ที่ดัชนี ' + index);
  }
});
console.log("=================================");
//การใช้ loop เพื่อดึงค่าออกจาก array
//for
const myArray2 = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray2.length; i++) {
  const value = myArray2[i];
  console.log(value); // แสดงค่าที่อยู่ในอาร์เรย์
}
console.log("=================================");

//forEach
//ใช้ array เดียวกันกับ for loop
myArray2.forEach ((value) => {
    console.log(value);
})
console.log("=================================");

//for...of
const myArray3 = ['Apple','Banana','Poteto']
for (const value of myArray3) {
    console.log(value)//แสดงค่าที่อยู่ใน array
}
console.log("=================================");

//ใช้ loop เพื่อดึงค่าของ array ที่อยู่ใน object
//for...of
const myObject = {
    id:123,
    item: [10,20,30,40]
}
for (const value of myObject.item) {
    console.log(value)
}
console.log("=================================");

//for
const myObject1 = {
    id:123,
    item: [10,20,30,40]
}
for (let i = 0 ; i< myObject1.item.length; i++) {
    const value = myObject1.item[i];
    console.log(value);
}
console.log("=================================");

//Aggregate Object
const book = { 
    isbn:123456789,
    title: 'JavaScript',
    author: {
        firstname: 'Umaporn',
        lastname: 'Sup'
    }
}
//มี 2 แบบ คือ Dot Notation , Bracket Notation => book["author"]["firstname"] 
const name1 = book.author.firstname //การใช้เรียกเข้าไปใน object เรื่อยๆ
console.log(name1);
console.log("=================================");

//Object Value contains function
//object สามารถเก็บ function ได้
const person = {
        id:1001,
        firstname:'Somsak',
        lastname:'Jaigang',
        getFullName: function () {
            return  `Fullname: ` + this.firstname + ' ' + this.lastname            
        }
}
console.log(person.getFullName()); //Fullname: Somsak Jaigang
//ถ้ามี function อยู่ใน object จะเรียกว่า method