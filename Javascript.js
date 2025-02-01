// var firstName,lastName,fulName;

// firstName = prompt("Enter First Name: ");
// lastName = prompt("Enter last Name: ");

// fullName = firstName+lastName;
// var len = fullName.length;
// document.write(fullName);
// document.write(len);

// var upper = fullName.toUpperCase();

// document.write(upper);

// var text = fullName.slice(1,2);

// document.write(text);

//Arrithmatic operator ->  +,-,*,/,%,**(Exponent), ++, --;

//Asignment Operator ->  =, +=, -=,/= , *= ,%=, **=

// var x = 3;
// x+=6;

// document.write(x);

// var num1 = prompt("Enter first number: ");
// var num2 = prompt("Enter second number: ");

// num1 = parseInt(num1,10);
// num2 = parseInt(num2,10);

// var sum,sub;

// sum = num1 + num2;

// document.write("Sum = "+sum+"<br/>");

// var sub = num1 - num2;

// document.write("Sub = "+sub);

// var firstNumber = prompt("Enter first number = ");
// var secondNumber = prompt("Enter second number = ");

// firstNumber = parseInt(firstNumber,10);
// secondNumber = parseInt(secondNumber,10);

// var result = firstNumber+secondNumber;
// document.write(firstNumber+" + "+secondNumber+" = "+result+"<br/>");

// var result = firstNumber-secondNumber;
// document.write(firstNumber+" - "+secondNumber+" = "+ result+"<br/>");

// var result = firstNumber*secondNumber;
// document.write(firstNumber+" * "+secondNumber+" = "+result+"<br/>");

// var result = firstNumber/secondNumber;
// document.write(firstNumber+" / "+secondNumber+" = "+result+"<br/>");

// var result = firstNumber%secondNumber;
// document.write(firstNumber+" % "+secondNumber+" = "+result);

// var base = parseFloat(prompt("Enter base = "));

// var height = parseFloat(prompt("Enter base = "));

// var area = 1/2*(base*height);

// document.write("Area = "+area);

/*
var fahrenheit = parseFloat(prompt("Enther fahrenheit temparature = "));

var celsius = (fahrenheit-32) * (5/9);

document.write("Celsius = "+celsius);
*/

/*
var celsius = parseFloat(prompt("Enter celsius = "));
var fahrenheit = (celsius*9/5)+32;

document.write("Farhenheit = "+fahrenheit);
*/

/*
var num = 6;
if(num%2==0)
    {
        document.write("The number is even.");
    }
else
{
    document.write("The number is Odd.");
}
*/

/*
var num = 5;

if(num%2==0)
    {
        console.log("Even");
    }

   else if(num%2!=0)
        {
            console.log("Odd");
        }
*/

/*
var marks;
var result;
marks = parseInt(prompt("Enter your marks = "));

if(marks>80)
    {
        result = "A+";
    }

else if(marks>=70 && marks<=79)
    {
        result = "A";
    }

else if(marks>=60 && marks<=69)
    {
        result = "A-";
    }

else if(marks>=50 && marks<=59)
    {
        result = "B";
    }

else if(marks>=40 && marks<=49)
    {
        result = "C";
    }
else if(marks>=33 && marks<=39)
    {
        result = "D";
    }

else
{
    result = "F";
}
document.write(result);

*/

/*
var num1 = prompt("Enter num1 = ");
var num2 = prompt("Enter num2 = ");
var num3 = prompt("Enter num3 = ");


if(num1>num2 && num1>num3)
    {
        console.log("Large number = "+num1);
    }
else if(num2>num1 && num2>num3)
    {
        console.log("Large number = "+num2);
    }
else if(num3>num2 && num3>num1)
    {
        console.log("Large number = "+num3);
    }

*/

/*
var letter = prompt("Enter a letter = ");

letter = letter.toLocaleLowerCase();

if(letter=="a" || letter =="e" || letter=="i" || letter=="o" || letter=="u")
    {
        console.log("Vowel");
    }
    else{
        console.log("Consonant");
    }

    */

// var digit = prompt("Enter any digit = ");
// if(digit==0)
//     {
//         console.log("Zero");
//     }

//     else if(digit==1)
//         {
//             console.log("One");
//         }

//     else
//     {
//         console.log("NOt a number");
//     }

/*
var digit = prompt("Enter any digit = ");

switch(digit)
{
    case "0":
        console.log("Zero");
        break;

    case "1":
        console.log("One");
        break;
    case "2":
        console.log("Two");
        break;

    default:
        console.log("Not a number");
}

*/

/*
var letter = prompt("Enter a letter = ");
letter = letter.toLowerCase();
switch(letter)
{
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
    console.log("Consonant");
}

*/

/*
for(var i=2;i<=100;i+=2)
    {
                document.write(i+"<br/>");
            
    }

    */

/*
    var m = parseInt(prompt("Enter the starting number = "));
    var n = parseInt(prompt("ENter the last number = "));

    var sum = 0;


    for(var i=m;i<=n;i++)
        {
            sum+=i;
        }

        document.write(sum);

        */

/*
        for(var i = 1;i<=5;i++)
            {
                var num1 =parseInt(prompt("Enter the first number = "));
                var num2 = parseInt(prompt("Enter the second number = "));
        
                var sum = num1+num2;
        
                console.log("Result = "+sum);
            }

*/

// var i=1;
// sum = 0;
// while(i<=50)
//     {
//         if(i%5==0 && i%3==0)
//             {
//                 sum+=i;
//                 document.write(i+"<br/>");
//             }
//         i++;
//     }

//     document.write(sum);

/*
var i=1;
do{
    document.write(" "+i);
    i++;
}

while(i<=10);
*/

/*
for(var i=1;i<=100;i++)
    {
        if(i%2==0)
            {
                continue;
            }
        document.write(" "+i);
    }
*/

//var number = Number(prompt("Enter a number = "));
/*
if(number>0)
{
    console.log("Positive");
}
else{
    console.log("Negative");
}

*/

/*
var result = number>0? "Positive": "Negative"
console.log(result);

*/

/*
var result = number>0? "Positive": number<0? "Negative": "Zero"

console.log(result);
*/

//Write the biggest number from 3 number;

/*
var num1,num2,num3,big;

num1 = parseInt(prompt("Enter the num1 = "));
num2 = parseInt(prompt("Enter num2 = "));
num3 = parseInt(prompt("Enter num3 = "));

var big = num1>num2 && num1>num3? num1: num2>num1&&num2>num3? num2: num3

console.log(big);
*/

// var num1 = parseInt(prompt("Enter a number1 = "));
// var num2 = parseInt(prompt("Enter a number2 = "));
/*
function sqaure(num1,num2){
    var result = num1 * num2;
    return result;
   
}
var ans = sqaure(num1,num2);\
document.write("Result = "+ans+"<br/>");
*/

/*
var choose = prompt("Enter your chooise: ");
if(choose=="add"){

    add(num1,num2);

    function add(num1,num2){
        var result = num1+num2;
        document.write("Sum = "+result+"<br/>");
    }
    
}

else if(choose=="sub"){

    sub(num1,num2);

    function sub(num1,num2){
        var result = num1-num2;
        document.write("Sub = "+result+"<br/>");
    }
}

else if(choose=="mull"){

    multi(num1,num2);

    function multi(num1,num2){
        var result = num1*num2;
        document.write("multification = "+result+"<br/>");
    }
}


else if(choose=="div"){

    div(num1,num2);

    function div(num1,num2){
        var result = num1/num2;
        document.write("Division = "+result+"<br/>");
    }
}

*/

/*
var num1,num2,sum;
num1 = parseInt(prompt("Enter number 1 = "));
num2 = parseInt(prompt("Enter num2 = "));
(function display(num1,num2){
    sum = num1+num2;
    console.log(sum);
})(num1,num2);
*/

/*
var display = function displayMessage(msg){
    console.log(msg);
}

display("Hello World");
*/

//var names = ["Saiful","Shojol","Tanjina"];

/*
var names = new Array();
names[0] = "Saiful";
names[1] = "Tanjina";
names[2] = "Shojol";
names[3] = "Rahim";
*/

/*
names.push("Karim");
names.push("Abdur Rahman");


for(var i=0;i<names.length;i++)
    {
        document.write(names[i]+"<br/>");
    }

    document.write(names.length+"<br/>");

    
    names.pop();
    document.write(names.length+"<br/>");

    names.push("Relative");

    document.write(names.length);
  */

/*
var country1 = ["Bangladesh", "South Korea","Japan"];
var country2 = ["Nepal","Vutan","Indonesia"];

var country = country1.concat(country2);
document.write(country);

*/

/*
var num = new Array();
var sum = 0;

for(var i=0;i<5;i++)
    {
        num[i] = parseInt(prompt("Enter any number = "));
    }

for(var i=0;i<num.length;i++)
    {
        sum+=num[i];
        console.log(num[i]);
    }

    console.log(sum);

*/

/*
var names = ["Saiful","Tanjina","Shojol"];
console.log(names);

names.shift();
console.log(names);

names.unshift("Rujina");
console.log(names);

//Add element using splice;
names.splice(2,0,"Karim","Rahim");
console.log(names);

//Delete element using splice;
names.splice(1,2);
console.log(names);
*/

/*
var newArray = names.slice(2);
console.log(newArray);

console.log(names);

*/

/*
var numbers = [20,5,25,17,3];
numbers.sort(function(a,b){
    return b-a;
});
console.log(numbers);
*/

/*
console.clear();
var highestScore = function(scores)
{
    var cnt=0;
    for(var i=0;i<scores.length;i++)
        {
            if(scores[i]>cnt)
                {
                    cnt = scores[i];
                }
        }

        return cnt;
}

var scores = new Array(5);
//var values = new Array(5);
for(var i=0;i<5;i++)
    {
       scores[i] =  parseInt(prompt("Enter array element"));
       
    }

    var result = highestScore(scores);



document.write("The highest number amoung them are = "+result);
*/

/*
var cnt=0;
var nam;

function highestRunScorer(playersInfo)
{
    for(var i=0;i<playersInfo.length;i++)
        {
            if(playersInfo[i][1]>cnt)
                {
                    cnt = playersInfo[i][1];
                    nam = playersInfo[i][0];
                }
        }
            return nam;
}


var playersInfo =[["Shakib",90],["Karim",59],["Rahim",60],["Abdul",99]];

var result = highestRunScorer(playersInfo);


document.write(result);
*/

/*
var name = "Saiful Islam";
var age = 25;
var cgpa = 3.13;
var lang = ["Bangali","English","Korean"];


console.log(cgpa);
*/
/*
var student1 = {
    name: "Saiful Islam",
    age: 25,
    cpga: 3.13,
    lang: ["Bangali","English","Korean"]
}

var student2 = {
    name: "Tanjina Akter",
    age: 25,
    cpga: 3.13,
    lang: ["Bangali","English","Korean"]
}


var student3 = {
    name: "Abdul hossian",
    age: 25,
    cpga: 3.13,
    lang: ["Bangali","English","Korean"]
}


console.log(student1.name);

console.log(student2.name);

*/
//HOw to create an object
//How to print the vlaue of an object;
//adding a constructor;

/*
function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;


    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

student1 = new Student("Saiful",25,3.13,["Bangali","English","Korean"]);
student2 = new Student("Tanjina",27,3.50,["Bangali","English","Korean"]);
student3 = new Student("Shojol",26,3.20,["Bangali","English","Korean"]);


student1.display();
student2.display();
student3.display();
*/

/*
var num1 = parseInt(prompt("Enter first number = "));
var num2 = parseInt(prompt("Enter second number = "));


var maximum = Math.max(num1,num2);

console.log(maximum);
*/

/*
var won = 0,lost = 0;
for(var i=0;i<5;i++){
var guessNumber = parseInt(prompt("Enter a number from 1 to 5 = "));
var randomNumber = Math.floor(Math.random()*5)+1;
if(guessNumber==randomNumber)
    {
        console.log("You have won");
        won++;
    }
    else
    {
        console.log("You have lost. Random number was "+ randomNumber)
        lost++;
    }
}

document.write("You won = "+won+"<br/>");
document.write("You lost = "+lost);
*/

/* Video = 34.
var date = new Date();
console.log(date);

var year = date.getFullYear();
console.log(year);

var d = date.getMonth();
console.log(d);

var currentDate = date.getDate();
console.log(currentDate);

var currentDay = date.getDay();
console.log(currentDay);

var currentHour = date.getHours();
console.log(currentHour);

var currentMinite = date.getMinutes();
console.log(currentMinite);
*/

//getElementById
/*
var myheading = document.getElementById("heading1");
myheading.innerHTML = "Hello";

var para = document.getElementById("paragraph");
para.innerHTML = "This paragraph change work successfully";
*/

//document.getElementById("pid").innerHTML = "This is changed";

//document.querySelector("div a").innerHTML = "THis is new changed";

/*
var myVar = document.querySelector("#saiful_img");

function myMessage(){
    myVar.src = "Image/Cv_Photo.png";
}

function myMessage2(){
   myVar.src = "Image/Laptop4.jpg";
}
*/

/*
var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading 3");

heading3.appendChild(text);


var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);
*/

/*
var heading2 = documnet.getElementByTagName("h1")[1];
myDiv.removeChild(heading2);
*/

/*
var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading 0");
heading0.appendChild(text0);

var heading1 = document.getElementByTagName("h1")[0];

myDiv.insertBefore(heading0,heading1);
*/

/*
var photos = ["Image/1.png","Image/2.jpg","Image/3.jpg","Image/4.jpg"];
var imgTag = document.querySelector("img");

var count = 0;

function prev(){

    count--;
    if(count<0){
        count = photos.length-1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}

function next(){
    count++;
    if(count>=photos.length){
        count = 0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
   
}
*/

/*

var myVar = document.querySelector("#paraId");

function addStyle(){
  
    
//    myVar.style.color = "red";
//     myVar.style.fontSize = "3rem";
//     myVar.style.fontWeight = "bold";
//     myVar.style.fontStyle = "italic";
    

   myVar.classList.add("para-style");
}


function removeStyle(){
    myVar.classList.remove("para-style");
}

*/

/*

var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover",test)

function test(){
    myVar.classList.add("my-style");
}

myVar.addEventListener("mouseout",test1)

function test1(){
    myVar.classList.remove("my-style");
}

*/

/*
var myVar = document.querySelectorAll(".myButton")[0];
myVar.addEventListener("click",test1);
function test1(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked.";
}



var myVar = document.querySelectorAll(".myButton")[1];
myVar.addEventListener("click",test2);
function test2(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked.";
}



var myVar = document.querySelectorAll(".myButton")[2];
myVar.addEventListener("click",test3);
function test3(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked.";
}
*/

/*
var len = document.querySelectorAll(".myButton").length;

for(var i=0;i<len;i++){

    var myVar = document.querySelectorAll(".myButton")[i];
myVar.addEventListener("click",test1);
function test1(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked.";
}

}
*/

//Audio Play of Javascriopt;
/*
for(var i=0;i<3;i++){
var myVar = document.querySelectorAll(".myButton")[i];
myVar.addEventListener("click",myFunction1);

function myFunction1(){
    var text = this.innerHTML;
   audioPlay(text);
   playAnimation(text);
}

    function audioPlay(text){
    switch(text){
        case "A":
            var audio = new Audio("Sounds/A.mp3");
            audio.play();
            break;
        case "B":
            var audio = new Audio("Sounds/B.mp3");
            audio.play();
            break;
        case "C":
            var audio = new Audio("Sounds/C.mp3")
            audio.play();
            break;
    }
}
}


document.addEventListener("keypress",function(event)
{
    var text = event.key;
    audioPlay(text);
    playAnimation(text);
})



function playAnimation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");



    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },1000)
}

*/

/*
var cnt = 0;
document.querySelector("textarea").addEventListener("keypress",function(event){

var text = event.key;
cnt++;
document.querySelector("p").innerHTML = "You have pressed "+cnt;

});
*/

console.clear();
// const input = document.querySelector("input[name=name]");

// input.addEventListener('change',changeHandler);

// function changeHandler(e){
//  // console.log(e.target);
//  //console.log(e.target.className);
//  //console.log(e.target.id);
//  console.log(e.target.value);
// }

/*
const programs = document.querySelectorAll("input[name=program]");


Array.from(programs).map((program) => {
    program.addEventListener("change", programHandler);
});

function programHandler(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
  
}
*/

/*
var department = document.querySelector("#department");

department.addEventListener('change',handleDepartment);

function handleDepartment(e){
    console.log(e.target.value);
}
*/

//Finding the elements
/*
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");


form.addEventListener("submit",formHandler);


function formHandler(e){
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
    console.log(password.value); 
}
    */

/*
const video = document.querySelector("video");

video.addEventListener("canplay",function(){
    console.log("You can play");
});

video.addEventListener("play",function(){
    console.log("This is play");
});

video.addEventListener("pause",function(){
    console.log("This is pause");
});

video.addEventListener("ended",function(){
    console.log("This is ended");
});

video.addEventListener("volumechange",function(){
    console.log("The volume is changed");
});
*/

/* Load And Unload.
window.addEventListener("load",function(){
    console.log("Load");
});

window.addEventListener("unload",function(){
    console.log("Unload");
});
*/

//Scroll
/*
window.addEventListener("scroll",function(){
    console.log("Scroll");
});
*/

//Resize
/*
    window.addEventListener("resize",function(){
        const width = window.outerWidth;
        const height = window.outerHeight;
        console.log(`Height = "${height}, width: ${width}`);
    });
*/

//Toggle work with details

/*
const details = document.querySelector("details");

details.addEventListener("toggle",function(e){
    console.log(e.target.open);
});
*/

/*
console.clear();

const buttons = document.querySelectorAll(".btn");

console.log(buttons);

Array.from(buttons).map((button) =>{
    button.addEventListener("click",function(event){
        console.log(event.target.innerText);
});
});

*/

/*
const div = document.querySelector("div");

div.addEventListener("click",function(e){
    //console.log("Click");
    // console.log(e.target.id);
    // console.log(e.target.className);
    console.log(e.target.innerText);

});
*/

/*
div.addEventListener("dblclick",function(){
    console.log("Double Click");
});

div.addEventListener("mousedown",function(){
    console.log("Mouse Down occured");
});

div.addEventListener("mouseup",function(){
    console.log("Mouse up occured");
});

div.addEventListener("mouseenter",function(){
    console.log("Mouse Enter occured");
});

div.addEventListener("mouseleave",function(){
    console.log("Mouse Leave occured");
});

div.addEventListener("mouseover",function(){
    console.log("Mouse over occured");
});

div.addEventListener("mousemove",function(e){
   // console.log("Mouse Move occured");
    console.log("clientX = "+e.clientX+" , clientY = "+e.clientY);

});
*/

/*
console.clear();
const textarea = document.querySelector("textarea");


textarea.addEventListener("keydown",function(event){
   if(event.repeat){
        alert("Do not repeat");
   }
});
*/

// textarea.addEventListener("keypress",function(){
//     console.log("Key Press occured");
// });

// textarea.addEventListener("keyup",function(event){
//     console.log("Shift "+ event.key);
// });

// console.clear();
// const input = document.querySelector("input");

// input.addEventListener("blur",function(event){

//     // input.style.backgroundColor = "transparent";
//     // input.style.padding = "0rem";

//     input.value = event.target.value.toUpperCase();
// });

// input.addEventListener("focus",function(){
//    // console.log("Focus is occured");

// //    input.style.backgroundColor = "orange";
// //    input.style.padding = "2rem";
// });

// input.addEventListener("focusin",function(){
//     console.log("Focus in is occured");
// })

// input.addEventListener("focusout",function(){
//     console.log("Focus out is occured");
// });

/*
 const input = document.querySelector("input");

 const p = document.querySelector("p");

 input.addEventListener("copy", function(){
   p.innerHTML = "You have Copyied";


   // document.write("Wow! You have copied");
 });


 input.addEventListener("cut", function(){
    p.innerHTML = "You have Cut";

 });

 input.addEventListener("paste", function(){
    p.innerHTML = "You have paste";

 });
 */

/*
 const div = document.querySelector("div");
 const p = document.querySelector("p");


 p.addEventListener("dragstart",function(event){
    event.dataTransfer.setData("Text",event.target.id);
 });



 div.addEventListener("dragover",function(event){
    event.preventDefault();
 });


 div.addEventListener("drop",function(event){
    let id = event.dataTransfer.getData("Text");
    console.log(id);
    div.appendChild(document.getElementById(id));
    event.preventDefault;
 });

*/

console.clear();
/*
//href
console.log("Href = "+location.href);

//Protocol
console.log("Protocol = "+location.protocol);

//Hostname
console.log("HostName = "+location.hostname);

//port
console.log("Port = "+location.port);


//Pathname
console.log("Path = "+location.pathname);
*/

/*
var locationDiv = document.querySelector(".location-div");

var p1 = locationDiv.children[0];
p1.textContent = location.href;


var p2 = locationDiv.children[1];
p2.textContent = location.protocol;


var p3 = locationDiv.children[2];
p3.textContent = location.hostname;


var p4 = locationDiv.children[3];
p4.textContent = location.port;


var p5 = locationDiv.children[4];
p5.textContent = location.pathname;


var visitButton = document.querySelector("#visit-button");

visitButton.addEventListener("click",function(){
    location.assign("https://www.youtube.com/");
});

*/

// alert("Error Here");

// confirm("Are you sure?");

// function deleteSomething(){
//     let value = confirm("Do you want to delete?");
//     if(value)
//     {
//         console.log("Deleted");
//     }
//     else{
//         console.log("Not deleted");
//     }
// }

// deleteSomething();

// function welcomeMessage(){
//     var h1 = document.createElement("h1");
//     let text;

//     var name = prompt("Enter your Name = ");
//     if(name==null || name=="")
//     {
//         text = "No name found";
//     }
//     else{
//         text = "Welcome "+name;
//     }

//     var textNode = document.createTextNode(text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);
// }

// welcomeMessage();

// console.clear();
// setTimeout(()=>{
//     console.log("Hi");
// },1000)

// setTimeout(display,2000);

// function display(){
//     console.log("Display function");
// }

// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click",saveUser);

// function saveUser(){
//     message.textContent = "User registration successfull";

//     setTimeout(()=>{
//         message.textContent = "";
//     },2000)
// }

// saveButton.addEventListener("click",displayCount);

// function displayCount(){
//     let count = 1;
//     message.textContent = count;

//     setInterval(()=>{
//         count++;
//         message.textContent = count;
//     },3);
// }

// saveButton.addEventListener("click",startClock);

// function startClock(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     minutes = formateTime(minutes);
//     seconds = formateTime(seconds);

//     let time = hours+" : "+minutes+" : "+seconds;

//     message.textContent = time;

//     setInterval(startClock,1000);
// }

// function formateTime(value)
// {
//     if(value<10)
//     {
//         value = "0"+value;
//     }
//     return value;
// }

// try{

//     //Code Test
//     alert("Hi Everyone");
//     alert(ant);
//     alert("Bye Everyone");
// }
// catch(err){
//     //Handle error.
//     alert("Inside catch block");
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// }
// finally{
//     alert("This is Finally");
// }

// document.querySelector("#checkButton").addEventListener("click",function(){
//   var num =  document.querySelector("#numTextfield").value;
//   console.log(num);

//     try {
//         if(num<5 ||num>10)
//         {
//             throw "Input is out of range";
//         }
//     }
//      catch(err)
//       {
//         console.log(err);

//     }

// });

// var c = document.getElementById("myCanvas");

// var ctx = c.getContext("2d");

// ctx.lineWidth = 3;
// ctx.strokeStyle = "black";
// ctx.strokeRect(10,10,380,280);

// ctx.fillStyle = "green";
// ctx.fillRect(12,12,376,276);

// var centerX = c.width/2;
// var centerY = c.height/2;

// ctx.beginPath();
// ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
// ctx.fillStyle = "red";
// ctx.fill();

// ctx.stroke();

/*
let name = "Saiful Islam";

let m = `I am ${name} I am learning JavaScript`;
console.log(m);
*/

//ES5 function
/*
function add(x,y){
    var sum = x+y;
    console.log(sum);
}
*/

//ES6 function

// const add = (x,y) => {
//     let sum = x+y;
//    console.log(sum);
// }

// add(20,30);

// "use strict"

// function sum(x,y,...z){
//     console.log(`x = ${x}, y=${y},z = ${z}`);
// }

// sum(10,20,30,40,50);

// function addNumbers(x,y,z){
//     return x+y+z;
// }

// var numbers = [10,20,30];
// var numbers2 =[40,50,60];

// // console.log(addNumbers(numbers[0],numbers[1],numbers[2]));

// // console.log(addNumbers(...numbers));

// let numbers1 = [...numbers,5,6,...numbers2];
// console.log(numbers1);

/*
let p1 = {
    name: "Saiful Islam",
    age: 30
}

let p2 = {
    nationality: "Bangladesh",
    occupation: "Software Engineer"
}

let p ={...p1,...p2}
console.log(p);
*/

// function studentInfo1 (name,age){
//     return {
//         name: name,
//         age: age
//     }
// }

// console.log(studentInfo1("Saiful Islam",29));

// let message = {
//     'body name'(){
//         return `Hi, I am object function`
//     }
// }

// console.log(message['body name']());

//for of loop
/*
const names = ["s1","s2","s3"]
for(let name of names)
{
    console.log(name);
}
    */

//For in loop
/*let students={
    Id: 101,
    name: "Saiful Islam",
    cgpa: 3.13
}

for(let x in students){
    console.log(`${x}: ${students[x]}`);
}
*/

// console.clear();
// var numbers = [10,20,30,40,50,60];
// var cnt = [];
/*
for(var i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}
*/
/*
numbers.forEach(myFunction)


function myFunction(a){
    console.log(a);
}
*/

/*
numbers.forEach(function(a){
    cnt.push(a+5);
})

console.log(cnt);  
*/

/*
numbers.forEach(function(x,index,arr){
    arr[index] = x+5;
})

console.log(numbers);
*/

// var numbers = [2,3,4,5,15,20,25,30];
// var squareNumbers = numbers.filter(function(x){
//     return x>10;
// })

// console.log(squareNumbers);
// console.log(numbers);

// function display1(){
//     console.log("I am display1");
// }

// const display2 = () => {
//     console.log("I am display2");
// }

// display1();
// display2();

// function add1(num1,num2)
// {
//     return num1+num2;
// }

// const add2 = (a,b) => {
//     return a+b;
// }

// console.log(add1(30,20));
// console.log(add2(10,20));

/*
console.clear();

var students = [
    {
        id: 101,
        name: "Saiful Islam",
        gpa: 2.65
    },

    {
        id: 102,
        name: "Tanjina",
        gpa: 3.50
    },

    {
        id: 103,
        name: "Shojol",
        gpa: 4.00
    },

    {
        id: 104,
        name: "Riyad",
        gpa: 2.99
    }
]

/*
function studentNames1(){
    return students.filter(function(x){
        return x.gpa>3;
    }).map(function(y){
        return y.name;
    });
}

console.log(studentNames1());
*/
/*
const studentNames2 = () =>{
    return students.filter((x)=>x.gpa>3).map((y)=>y.name);
}

console.log(studentNames2());
*/

//Array destructure

// let numbers = [10,20,30,40,50];
// let[num1,num2,...x] = numbers;
// console.log(x);
// console.log(num2);

//Swaping
/*
let a=10,b=20;
[a,b] = [b,a];
console.log(a);
console.log(b);
*/

//Object destructure
/*
const studentInfo = {
    id: 101,
    fullName: "Saiful Islam",
    gpa: 3.92,

    languages: {
        native: "Bangla",
        beginner: "English"
    }
}

const{fullName,languages} = studentInfo;

console.log(fullName);
console.log(languages.native);
*/

//Destructuring  function parameters
/*
const studentInfo = ({id,fullName})=> {
    console.log(`${id} = ${fullName}`);
}


const student = {
    id: 101,
    fullName: "Saiful Islam"
}

studentInfo(student);
*/

//Array Methods,find(),fundIndex().
/*
let numbers = [5,15,18,20,25,30];

const evenNumber = (value,index,array) =>{
    if(value%2==0)
    {
        return value;
        return index;
    }
}

let firstNumber = numbers.find(evenNumber);
let firstNumberIndex = numbers.findIndex(evenNumber);

console.log(firstNumber);
console.log(firstNumberIndex);
*/

/*
const students = [
    {
        id: 101,
        gpa: 3.50
    },

    {
        id: 102,
        gpa: 4.40
    },

    {
        id: 103,
        gpa: 4.50
    }
   

]


console.log(students.find(value => value.gpa>4));
*/

//String Methods
/*
console.clear();
const message = "Today is friday";
console.log(message.startsWith("Today"));
console.log(message.endsWith("friday"));
console.log(message.includes("is"));
*/

// import {text as message} from "./myModule.js";
// console.log(message);

// setText("Goodbyte from Es6");
// console.log(text);

class Student {
  //class

  constructor(id, name) {
    //constructor
    this.id = id;
    this.name = name;
  }

  set studentName(name) {
    this.name = name;
  }

  get studentInfo() {
    return this.id + " " + this.name;
  }
}

let s1 = new Student(101, "Saiful");

console.log(s1.studentInfo);
