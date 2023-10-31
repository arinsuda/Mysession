  //Unpacking Elements (แยกองค์ประกอบ):
// Unpacking จากอาร์เรย์
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first); // 'red'
console.log(second); // 'green'

// Unpacking จากออบเจกต์
const person1 = { name: 'John', age: 30 };
const { name1, age1 } = person1;
console.log(name1); // 'John'
console.log(age1); // 30

//Unpacking Properties (แยกคุณสมบัติ):
// Unpacking คุณสมบัติจากอาร์เรย์
const personal = ['John', 30];
const [namer, ager] = personal;
console.log(namer); // 'John'
console.log(ager); // 30

// Unpacking คุณสมบัติจากออบเจกต์
const person2 = { name: 'John', age: 30 };
const { name2 } = person2;
console.log(name2); // 'John'

//// Unpacking ข้อมูลที่ซับซ้อนจากออบเจกต์
const person = { name: 'John', age: 30, address: { city: 'New York', zip: '10001' } };
const { name, age, address: { city, zip } } = person;
console.log(city); // 'New York'
console.log(zip); // '10001'

//การดึงค่าออกมาจาก nestedArray
const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const number = nestedArray[1][0] //ระบุตำแหน่งของ index array
console.log(number);

// สร้างอาร์เรย์
const numbers = [1, 2, 3, 4, 5];

// .push() - เพิ่มสมาชิกไปยังส่วนท้ายของอาร์เรย์
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// .pop() - ลบสมาชิกที่ส่วนท้ายของอาร์เรย์
const lastNumber = numbers.pop();
console.log(lastNumber); // 6

// .unshift() - เพิ่มสมาชิกไปยังส่วนหน้าของอาร์เรย์
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3, 4, 5]

// .shift() - ลบสมาชิกที่ส่วนหน้าของอาร์เรย์
const firstNumber = numbers.shift();
console.log(firstNumber); // 0

// .slice() - สร้างสำเนาของอาร์เรย์หรือเลือกส่วนของอาร์เรย์
const selectedNumbers = numbers.slice(1, 3);
console.log(selectedNumbers); // [2, 3]

// .fill() - เติมค่าในอาร์เรย์
numbers.fill(0, 2, 4);
console.log(numbers); // [0, 1, 0, 0, 4, 5]

// .join() - รวมสมาชิกในอาร์เรย์เป็นสตริง
const joinedString = numbers.join(', ');
console.log(joinedString); // "0, 1, 0, 0, 4, 5"

// .includes() - ตรวจสอบว่าอาร์เรย์มีค่าที่กำหนดหรือไม่
const hasValue = numbers.includes(3);
console.log(hasValue); // true

// .sort() - เรียงลำดับสมาชิกในอาร์เรย์
numbers.sort();
console.log(numbers); // [0, 0, 1, 4, 5]

// .reverse() - กลับหน้าสมาชิกในอาร์เรย์
numbers.reverse();
console.log(numbers); // [5, 4, 1, 0, 0]

// .concat() - รวมอาร์เรย์
const moreNumbers = [6, 7, 8];
const combinedNumbers = numbers.concat(moreNumbers);
console.log(combinedNumbers); // [5, 4, 1, 0, 0, 6, 7, 8]

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => number * number);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  const person = people.find((person) => person.age === 30);
  
  console.log(person); // { name: 'Bob', age: 30 }
  
//findIndex
  const fruits = ['apple', 'banana', 'cherry', 'date'];
const index = fruits.findIndex((fruit) => fruit === 'cherry');

console.log(index); // 2

//every
const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // true (ทุกตัวเลขเป็นเลขคู่)

const numbers = [1, 3, 5, 7, 8, 9];

//some
const hasEven = numbers.some((number) => number % 2 === 0);
console.log(hasEven); // true (มีตัวเลขคู่)
