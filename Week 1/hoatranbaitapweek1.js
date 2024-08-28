
// Định nghĩa một mảng chứa các chuỗi
var fruits = ["Apple", "Banana", "Orange", "Mango"];

// Truy cập phần tử thứ hai của mảng (index = 1)
console.log(fruits[1]); // In ra: "Banana"

// // Thay đổi giá trị của phần tử thứ ba của mảng (index = 2)
fruits[2] = "Hannah Test";

// // In ra mảng sau khi thay đổi
console.log(fruits); // In ra: ["Apple", "Banana", "Hannah Test", "Mango"]

// // Thêm một phần tử mới vào cuối mảng
fruits.push("Pineapple Test");

// // In ra mảng sau khi thêm phần tử mới
console.log(fruits); // In ra: ["Apple", "Banana", "Grapes", "Mango", "Pineapple Test"]


//-------------------------------------------------
//ĐỊNH NGHĨA OBJECT
var LaoCongAdamo = {
  Name: "Hannah",
  Age: 18,
  Department: "Tester"
};

// Truy cập or lấy các thuộc tính của object:
console.log(LaoCongAdamo.Name);
console.log(LaoCongAdamo.Age);
console.log(LaoCongAdamo.Department);

// Thêm thuộc tính mới vào object:
LaoCongAdamo.Project = "MadeComfy";

//Lấy ra cả object sau khi thêm thuộc tính mới:
console.log(LaoCongAdamo);

function dientichhinhvuong(a) {
  return a*a
}
console.log(dientichhinhvuong(10));




//HÀM - fuction tính diện tích hình chữ nhật
function dientichhcn(a,b) {
  return a*b
}
console.log(dientichhcn(5,10));

//Tính chu vi hình tròn
function chuvihinhtron(r) {
  return r*2*3.14
}
console.log(chuvihinhtron(5));

//Toán tử
var a = 1;
var b=2;
var x = a +b; 
console.log(x);
var y = a - b;
console.log (y)
var z = a/b;
console.log(z);

//Câu điều kiện:
var a = 2;
var b = 3;
var x = a + b;
if (x===3) {
  console.log("x bằng 3")
} else {
  console.log("x không bằng 3")
}

var age = 16;

if (age >= 18) {
    console.log("Tuổi của bạn là  " + age + "  , bạn đã đủ tuổi.");
} else {
    console.log("Tuổi của bạn là " + age + ", bạn chưa đủ tuổi.");
};

//Vòng lặp
var ActiveProperty = [];
var InactiveProperty =[];
var test1 = {
  name: "Property1",
  id: 1,
  status: "active"
};
var test2 = {
  name: "Property2",
  id: 2,
  status: "inactive"
};
var test3 = {
  name: "Property3",
  id: 3,
  status: "active"
};

var properties = [test1, test2, test3];


for (var i = 0; i < properties.length; i++) {
    if (properties[i].status === "active") {
        ActiveProperty.push(properties[i].name);
    } else if (properties[i].status === "inactive") {
        InactiveProperty.push(properties[i].name);
    }
    console.log(i)
    console.log(properties.length)
    console.log(properties[i].status)
}
 
console.log("Các property active:", ActiveProperty); //Property1, Property3
console.log("Các property inactive:", InactiveProperty); //Property2

// let mydog = {
//   name: 'pipi',
//   weight: 5,
//   eat: function(bone)
//   {
//     this.weight = this.weight + bone.weight;
//     let bone = { weight: 0.5 };
//     return this;
//   }
// }

//   console.log('before eating', mydog.weight);
//   console.log('after eating', eat(bone)); 

 