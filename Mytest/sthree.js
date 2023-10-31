//Getting , Setting , Creating Object Properties
//use Dot Notation & Bracket Notation 
const book = {  isbn:123456789,
                title:"JavaScript",
                author:{
                    fristname:"Umapron",
                    lastname:"Sup"
                }
            }
//Getting object property (การเข้าถึงคุณสมบัติของอ็อบเจกต์)
console.log(book.isbn);
console.log(book["title"]);

console.log(book["author"]["fristname"]);
//Setting object property (การกำหนดค่าคุณสมบัติของอ็อบเจกต์)

book.author.fristname = 'Uma'
//Create new object property (การสร้างคุณสมบัติของอ็อบเจกต์)

book['publishedYear']=2000
console.log(book['publishedYear']);
//book.publishedYear=2000

console.log(book)
//OUTPUT
// {
//     isbn: 123456789,
//     title: 'JavaScript',
//     author: { fristname: 'Uma', lastname: 'Sup' },
//     publishedYear: 2000
//   }

console.log("=========================================");

//Definition Method
const square = {
    side: 10,
    area: function() { return this.side * this.side}
}
const space = square.area()
console.log(space) //100
//function ที่อยู่ใน object

console.log("=========================================");

//Object Passing to functions
//create object without class
//the function distance does not care whether the arguments are instance of the class point

function distance(p1,p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
    //Exponentiation operator(**)
}

console.log(distance({x:1,y:1},{x:2,y:2}));
//1.4142135623730951

console.log("=========================================");

//Object Passing to function by reference
let point = {x:10,y:20}
let newPoint = point
newPoint.x = 30 //เปลี่ยนค่าตัวแปร newPoint ใน ค่า x
console.log(point);//{ x: 30, y: 20 }

console.log("=========================================");
