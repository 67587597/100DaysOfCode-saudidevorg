
/*
//day1 + day2
document.write("Welcome to JS World");
document.write("-----------------");

const smallNumbers= [1,2,3,4,5];
document.write(smallNumbers);
document.write("-----------------");
const GreatNumbers= [6,7,8,9,10];
document.write(GreatNumbers);
document.write("-----------------");

//Combine 2 arrays using spread operator ...
const NumbersUnder10 = [...smallNumbers, ...GreatNumbers];
document.write(NumbersUnder10);


//day3
//variables ES5
var a,b,c
a = 5;
b = 4;
c = 6;
a= 7;
document.write('ES5 ');
document.write(a + ',' + b + ',' + c);

/*Varibles ES6*/
/*var x = 10;

const y = 4;
let z = 6;

document.write(' ES6 ');
document.write(x + ',' + y + ',' + z);

*/


////day 5
//var x = 10;
//
//document.write('Hello, this is my first challenge and I will do it ' + x + ' times. <br> I will do it, I will learn JavaScript.');
//
//
//
////Day 6
//function تجربة(name)
//{
//  document.write( "مرحباَ " + name);
//}
//
//تجربة("سندس");

////Day 8
//let c =10; const b = 9;
//
//
//document.
//write(c + b);

//Day 9
// to get randome number between 1 and 10
//for(var i = 0; i< 10; i++)
//{
//var x = Math.random(); 
//document.write(x + '<br>');
//
//var y = Math.round(x * 10) ;
//document.write(y + '<br>');
//
// }

//Day 10
//var oldDateWithTime = new Date(2019, 8, 13, 15, 53, 30); 
//var dateToday = new Date();
//document.write(oldDateWithTime + '<br>');
//document.write(dateToday + '<br>');
//var elapsed = dateToday - oldDateWithTime; 
//document.write(elapsed + '<br>');
//document.write(oldDateWithTime.getFullYear()  + '<br>');
//document.write(oldDateWithTime.getMonth()  + '<br>');
//document.write(oldDateWithTime.getDate()  + '<br>');
//document.write(oldDateWithTime.getDay()  + '<br>');
//document.write(oldDateWithTime.getHours()  + '<br>');
//document.write(oldDateWithTime.getUTCHours()   + '<br>');
//document.write(oldDateWithTime.toString()  + '<br>');
//document.write(oldDateWithTime.toUTCString()  + '<br>');
//document.write(oldDateWithTime.toLocaleDateString()  + '<br>');
//document.write(oldDateWithTime.toLocaleTimeString()  + '<br>');
//document.write(oldDateWithTime.toISOString()  + '<br>');
// 

//Day 11+ Day 12
//window.alert('Hello');
//console.log('popup box is shown up');

//Day 13
//var s = "I am working on improving my skills";
//var s26 = s.charAt(26);
//var lastChar = s.charAt(s.length -1);
//var first = s.substring(0,12);
//var first2 =  s.slice(0,12);
//var lastWord = s.slice(-6);
//var sIndex = s.indexOf(s);
//var arr =[];
//arr.push(s.split(' '));
//var newS = s.replace('improving my skills', 'gaining new knowladge');
//var upper = s.toUpperCase();
////document.write(s);
//document.write('s=' + s +  ' s26=' + s26 + '<br> lastChar=' + lastChar +  '<br> first=' + first + '<br> first2=' + first2 +  '<br> lastWord=' + lastWord +  '<br> sIndex=' + sIndex + '<br> newS=' + newS +  '<br> upper=' + upper + '<br>');
//document.write(arr);
//

//Day 14
// Print Fibonacci numbers from 1 to 10
//var x, z;
//function f(y) {
//  if(y==0 || y==1) 
//      z = 1;
//  else
//   z= f(y-1) + f(y-2);
//  return z;
//}
//
//for(x= 1; x<=10; x++)
//  {
//    document.write('<br>');
//   document.write(f(x))
//   }
//
////Day 15
//var now = new Date();
//var birthYear = 1995;
//if(now.getFullYear() - birthYear >= 18 )
//  {
//  document.write('Adult');
//  }
//else
//  {
//  if(now.getFullYear() - birthYear < 18  && now.getFullYear() - birthYear > 12 )
//    document.write('Teen');
//    else
//      document.write('Child');
//  }
//Day 16
//var n = 4 ;
//if (n == 1) {
//document.write("You have 1 new message.") ;
//}
//else if (n == 2) {
//document.write("You have 2 new messages.") ;
//}
//else if (n == 3) {
//document.write("You have 3 new messages.");
//}
//else {
//document.write("You have new messages.") ;
//}

//Day 17
//var n = 90;
//switch(true) {
//case (n%2 == 0):
// document.write(n + " is even number");
//case (n%3 == 0):
// document.write("<br>" + n+ " is dividable by 3");
//  case (n%5 == 0):
// document.write("<br>" + n+ " is dividable by 5");
//
//default:
// document.write("<br>" + n+ " is a number");
// break;
//}

//Day 18 + Day 19
//if(browser === 'Edge')
// alert( "You've got the Edge!" );//Day 18 + Day 19
//if else(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')
// alert( 'Okay we support these browsers too' );
//else
// alert( 'We hope that this page looks ok!' );

//Day 20
//var count =0;
//while (count < 10) 
//{
//  document.write('<br>');
//  document.write(count);
//  count ++
//}

//Day 21
//var count =0;
//do {
// document.write(count);
//}while (count++ < 10  &&  count > 1);

//Day 22
//var i=1; 
//var j=10; 
//var multi;
//for(; i < 5 ; i++, j--){
//multi = i * j;
//document.write(i + '*' + j + '=' +  multi+"<br>");
//}

//Day 23
//var x = 0;
//var z = 1;
//labelCancelLoops: while (true) {
// document.write("multiplication Table for " + (x + 1) + "<>");
// x += 1;
// z = 1;
// while (true) {
// document.write( x + '*' + z + '=' + x * z +'<br>');
// z += 1;
// if (z === 11 && x === 11) {
// break labelCancelLoops;
// } else if (z === 11) {
// break;
// }
// }
//}


////Day 24
//var x = 0;
//var z = 1;
//document.write("multiplication Table Of even numbers <br>");
//labelCancelLoops: while (true) {
//  if(x%2 == 0) 
//     document.write("multiplication Table for " + (x +2)  + "<br>");
// x += 1;
// z = 1;
//  if(x%2 != 0)
//   continue labelCancelLoops;
// while (true) {
// document.write( x + '*' + z + '=' + x * z +'<br>');
// z += 1;
// if (z === 11 && x === 11) {
// break labelCancelLoops;
// } else if (z === 11) {
// break;
// }
// }
//}