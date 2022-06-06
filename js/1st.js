// Function to interact with the user: alert,prompt and confirm.
/*
1. alert() - show a Message.
 
2. promt() - show a message, input text. It returns the text on ok or, if cansel button or Esc is clicked, null.

3, confirm() - shows a message, confirm with "OK" or "cancel" . It returns true for OK and FALSE for Cancel/Esc.


NOTE: All these pause script execution and dont allow the visitor to interact with the rest ofo the page until the window has been dismised.
*/
// Function
/* String()
Number()
Boolean()
*/

//ARRAY____________________________________________________



// let book = ["math", "physics", "bio", "computer"];

// book.push("Hindi");
// console.log(book);

// book.unshift("Hindi");//removal of specific element
// console.log(book);

// book.pop();//removal from last
// console.log(book);

// book.shift();//removal from begining
// console.log(book);

// book.slice(2, 1);//first parameter denotes form which position we want to remove and 2nd postion denotes how many paramte
// console.log(book);

// //for emptying array
// book.length = 0;
// book = [];

// let position = book.indexOf("bio");
// console.log(book);
// console.log(Array.isArray(book));


// let text = "this ia a random text";

// let  wordarray = text.split('.');
// console.log(wordarray);

// let sep = text.split('s');
// console.log(sep);
  

// let book = ["math", "physics", "bio", "computer"];

// let book2 = ["Hindi","English"];

// let book3 = ["punjabi","urdu"];

// let newbook = book.concat(book2,book3);
// console.log(newbook);



//MULTIDIMENSIONAL array

// let book = ["math", "physics", "bio", "computer"];

// let bookwithpages = [
//     ["math", "300"],
//     ["physics","500"],
//     ["bio","200"]
// ];
// console.log(bookwithpages);
// let fetch = bookwithpages[1][0];
// console.log(fetch);

 //let book = ["math", "physics", "bio", "computer"];
// let booklength = book.length;
// for(i = 0; i<booklength; i++)
// {
//     console.log(`Element ${i} is ${book[i]} \n`);
// }
// book.forEach(myfu);
// function myfu(value)
// {
// console.log(value);
// }

//FUNCTOIN

// function multable()// funciton multable(num)
// {
//     for(i = 1; i<=10; i++)
//     {
//         document.write(`2 x ${i} = ${2*i}`);// document.write(`num x ${i} = ${num*i}`);
//         document.write("<br>");

//     }
//     document.write("<br><br>");
// }

// multable();// multable(3);

// console.log("Hey")

// multable();

// function add()// with passing no parametes
// {
//     console.log(arguments[1]);

// }
// add(3,4,5,5);

 // ANONYMOUS FUNCTION

 // function expression
//  let abc = function()
//  {
//      console.log("karn tiwari");
//  }
// abc();

// setTimeout(function ()
// {
//     console.log("karn");

// },3000);

//Immediately invoked function

// let msg = "hello my scritp";
// function show()
// {
//     console.log(msg);

// }
// show();



// OBJECT

let person = {
    firstName:'karn',
    lastName : 'tiwari'
};

person.age = 24;
// console.log(age);
// console.log(person.firstName);
// console.log(person.lastName);
// delete person.lastName;
// console.log(person['firstName']);
// console.log(person['lastName']);
// console.log('age' in person);// return in true of false not for undefined

// // iterating all values of object
//  for(let key in person)
//  {
//     console.log(key + ": " + person[key]);//for accesing value we use array notation
//  }

// //METHOD
// person.sayhello = function()
// {
//     console.log("hello !");

// }
// person.sayhello();
// //2 we can assign another function in equal to function use it 
// // 3 we can assign and define inside the object and call it for our use

// //4 ES6 method
// let person = {
// firstName = 'karn';
// lastName = 'tiwari';
// sayHello(){
//     console.log("hello");

// }
// };
// person.sayHello();


// when we use object property within object then we use this.property for calling the value


//DATE
//let x = new Date();
//let x = new Date(2013,11,13,10,33,45);// old date year month date hour min sec microsec
// let x = new date("october 13,2013,11:12:33");
// x.getTime x.getYear x.getMonth x.getHour x.getMinutes
// x.setDate we can edit date
//x.setDate(x.getDate() + 50); it gives 50 days plus date
//console.log(x);

// //OBJECT CONSTRUCTOR
// var student1 = {
//     firstName :"karn",
//     lastName : "tiwari",
//     age: 25,
//     class: 5
// 
// // }
//for adding property in this from outer side we add by Student.protype.nationality = "Indian";
// function Student(first,last,age,cls)
// {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
// }
// var student1 = new Student("karn", "tiwari",20,5);
// student1.nationality = "Indian";
// //var student2 = new Student("david", "tiwari",1,15);
// //var student3 = new Student("shivam", "tiwari",30,55);
// console.log(student1);

 //NESTED OBJECT
//  var user = {
//      id: 121,
//      email: "abs@gmail.com",
//      personalInfo:{
//          name: "abbc",
//          addres:{
//              street: "sdfads",
//              city:"askdf",
//              country:"India",
//          }

//      }

//  };
//  console.log(user.personalInfo);
 
//HOISTING=> Before execution javascript reads all declaration it means function calls sabse uper rakh leta hai bhale hi execute hone se pehle
// hoist sirf declaration ko karta hia javascript but assignment ko nhi karta hai
// var k case me khud se undefined kar deta hai yahi agar let ya const lenge to ye error through karega

// hello();
// function hello()
// {
//     console.log("Hello world");

// }
 
//STRICT MODE=> isko use karne se agar hum kisi bhi cheez ko declare nhi akrenge to error dega aur ye hum bug hone se bachne k liye karte hai warna javascript apne aap declare kar deta hai
// "strict mode"
// x = 5;
// console.log(x);


/*DOM -->The document object model(DOM) is an application programming interface (API) for manipulating HTML and XML documents.(add,remove and modify parts of the documents/HTML)'
 when web pag is loaded , the bowser creates a document object model of the page
 with the object model javascript gets all the power it needs to create dynamic HTML
NOTE- in the DOM, all HTML elements are defined as objects. so it will have both property and method
The document object represents your web page
If you want to access any element in the HTML page you always start with accessing th document objects
 javascript can change all the HTML elements in the page
javascipt can change all the HTML attributes in the page
javasript can change all the CSS styles in the page
javascipt can remove existing HTML elements and attributes
javascipt can add new HTML elements and attributes
javascript can react to all the existing HTML events in the page
javascipt can create new HTML events in the page
*/

