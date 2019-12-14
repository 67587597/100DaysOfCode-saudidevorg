
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
//Day 25 + Day 26
//for (var i=1; i<=5; i++)
//{
// var x= i;
//  var z = i*i;
//  document.write('i=' + i);
//  document.write('<br>');
//  
//  labelToContinue: while(z <= 10 && z > 0) { 
//    z = z + 2; 
//    if(z%2 !== 0) {
//        // document.write('Skipped');
//        // document.write('<br>');
//        continue labelToContinue;
//      }
//    else
//      {
//        document.write('z=' +z);
//        document.write('<br>');
//      }
//     
//  }
//  lableToBreak: while(x > 0 && x <= 5) {
//    if(i >= 5)
//      {
//        document.write('It is greater than 4');
//        break lableToBreak;
//      }
//    document.write('x=' + x);
//    document.write('<br>');  
//     x = x - 1;
//   }
//    document.write('---------------------------------');
//    document.write('<br>');
//}

//Day 27
//function spellMyName(name) {
//  document.write('full name is:' + name + '<br>');
//  var i = name.length;
//  if(i > 0)
//    {
//   for(var x=0 ; x< i; x++)
//     {
//         document.write((x+1) +'=' + name.charAt(x) + '<br>');
//       if(x == 4)
//         return;
//     }
//    }
//
//}
//spellMyName('Sondos');
//document.write('-------------------------<br>');
//document.write(spellMyName('Sondos')); 


//Day 28
// var x=6; var z=0;
//
// function devid(a, b){
//    if(a != 0 && b != 0)
//    { 
//        var f =a/b;    document.write(f);
//    }
//   else if(a == 0 && b != 0 )
//     document.write(0);
//   else
//     throw "not a correct expression";
// }
//
// devid(x,z);
// devid(x,z);

//Day 29
//function findFactors() {
//  var x, r;
// var z=  Number(prompt('Enter a composite  number', ''));
//  if( ((z % 2 == 0 ) || (z % 3 == 0) || (z % 5 == 0) || (z % 7 == 0)) && (z !== 2  && z !==3 && z !==5 && z !==7))
//    x =  'Composite';
//  else
//    x= 'Prime'
//  document.write('Entered number is' + x);
//  
//    try{
//     y = z;
//        document.write('<br>' + 'Entered number\'s factors:'+ '<br>')
//     while(((z % 2 == 0 ) || (z % 3 == 0) || (z % 5 == 0) || (z % 7 == 0)))
//        {
//            if(z%2 == 0) {
//                 document.write(2 + '<br>')
//                 z = z/2; }
//            else if(z%3 == 0) {
//                 document.write(3 + '<br>')
//                 z = z/3; }
//            else if(z%5 == 0) {
//                 document.write(5 + '<br>')
//                 z = z/5;}
//            else if(z%7 == 0) {
//                 document.write(7 + '<br>')
//                 z = z/7;}
//        if((z % 2 != 0 ) && (z % 3 != 0) && (z % 5 != 0) && (z % 7 != 0) && z != 1)
//            document.write(z + '<br>')
//                
//        
//        }}
//     catch(e) {
//      document.write('error');
//     }
//     finally {
//       document.write('That is it');
//     }
//}
//findFactors();

//Day 30
// Creating Objects using Decorator function
//var CourseCreator =  function(obj, name, duration, price) {
//    obj.name = name;
//    obj.duration = duration;
//    obj.price = price;
//return obj;
//}
//var arr = [];
//JavaScriptCourse = CourseCreator({}, 'JS', 3, 300);
//DataAnalysiaCourse = CourseCreator({}, 'DA', 3, 500);
//arr.push(JavaScriptCourse);
//arr.push(DataAnalysiaCourse);
//
//arr.forEach(function(val,index) { 
//    document.write('Course ' + val["name"] + ' Costs ' + val.price + '<br>');
//})
////
////document.write(DataAnalysiaCourse.price);
////document.write(JavaScriptCourse.price);
//
//Day 31
//var Book = function(name, pages){
//  this.name = name;
//  this.pages= pages;
//  this.MoveToPage =  function(x){
//    document.write('Current Page is ' + x)
//  }
//}
//
//var WutheringHeights = new Book('Wuthering Heights', 406);
//WutheringHeights.MoveToPage(20);

//Day 32 + Day 33
//function DevideNumbers() {
//
//var x =  Number(prompt('Enter the first number', ''));
//var z =  Number(prompt('Enter the seconed  number', ''));
//   try{
//      var y = Number(x/z);
//       if(y !=  'Infinity')
//            document.write('Result =' + y);
//       else
//           throw('Can\'t devided by 0 ')
//      }
//    catch(e) {
//     document.write(e);
//    }
//    finally {
//      document.write('<br> Try again');
//    }
//}

//Day 34
////ES5 Function
//var name = 'general';
//printObjects = function(obj) {
//    document.write(obj.name);
//}
////ES6 function
//const printGlobaObjects = () =>  document.write(this.name);
//
//var person = {
//  name: 'Sondos'
//}
//printGlobaObjects();
//document.write('<br>');
//printObjects(person);
//
//
//DevideNumbers();
//Day 35
//
//var Person = function(name, major) {
//  this.name = name;
//  this.major = major;
//}
//
//var sondos = new Person("Sondos", "CS");
//document.write(sondos.major);

//Day 36

//var Person = function(name, major, degree) {
//  this.name = name;
//  this.major = major;
//  this.degree = degree;
//}
//
//var sondos = new Person("Sondos", "CS", "BS");
//document.write('<br>' + sondos.major + ' has ' + sondos.degree + ' in '+ sondos.major);
//delete sondos.degree
//document.write('<br>' + sondos.major + ' has ' + sondos.degree + ' in '+ sondos.major);
//Day 37
//var Person = function(name, major, degree) {
//  this.name = name;
//  this.major = major;
//  this.degree = degree;
//}
//
//var sondos = new Person("Sondos", "CS", "BS");
//
//document.write('<br>' + sondos.major + ' has ' + sondos.degree + ' in '+ sondos.major);
//delete sondos.degree
//document.write('<br>' + sondos.major + ' has ' + sondos.degree + ' in '+ sondos.major + '<br>');
//document.write("degree" in  sondos);
//document.write('<br>');
//document.write(Person.hasOwnProperty("degree"));


//Day 38
//var person = {
// firstName: "Sondos",
// lastName: "Alsalooli",
// language: "EN",
// get langGet(){ 
//  return this.language}, 
// set langSet(value) { 
// this.language = value; }
//};
//
//const lang = person.langSet = 'AR';
//document.getElementById('div1').innerHTML = lang;

//Day 39 + Day 40
// Using setter and getter

//var Course = {
// Subject: "ALGORITHM",
// CoordinatorName: 'Noura',
// NOofHours: "30",
// NoofStudents: "20",
// set setSubject(val) {
//     this.Subject = val;
// },
// get getSubject() {
//    return this.Subject;
// },
// set setCoordinatorName(val) {
//     this.CoordinatorName = val;
// },
// get getCoordinatorName() {
//    return this.CoordinatorName;
// },
// set setNOofHours(val) {
//     this.NOofHours = val;
// },
// get getNOofHours() {
//    return this.NOofHours;
// }, 
// set setNoofStudents(val) {
//         this.NoofStudents = val;
// },
// get getNoofStudents() {
//    return this.NoofStudents;
// }
//
//};
//
////Using Inheritance
//function courseClass(Subject, CoordinatorName, NOofHours, NoofStudents) {
//    this.Subject = Subject;
//    this.CoordinatorName = CoordinatorName;
//    this.NOofHours = NOofHours;
//    this.NoofStudents = NoofStudents;
//}
//let count = 0;
//document.getElementById('Subject').value = Course.getSubject;
//document.getElementById('CoordinatorName').value = Course.getCoordinatorName;
//document.getElementById('NOofHours').value = Course.getNOofHours;
//document.getElementById('NoofStudents').value = Course.getNoofStudents;
//
//function setValueOfControls(e, cor) {
//    console.log(e);
//    if(e == "0")
//    {   
//        document.getElementById('Subject').value = Course.getSubject;
//        document.getElementById('CoordinatorName').value = Course.getCoordinatorName;
//        document.getElementById('NOofHours').value = Course.getNOofHours;
//        document.getElementById('NoofStudents').value = Course.getNoofStudents; 
//        var corSubject, corCoordinatorName, corNOofHours, corNoofStudents;
//        corSubject = cor.Subject;
//        corCoordinatorName = cor.CoordinatorName;
//        corNOofHours = cor.NOofHours;
//        corNoofStudents = cor.NoofStudents;
//        creatNewDiv(corSubject, corCoordinatorName, corNOofHours,corNoofStudents);
//    }
//    else {
//         document.getElementById('Subject1').value = '';
//        document.getElementById('CoordinatorName1').value = '';
//        document.getElementById('NOofHours1').value = '';
//        document.getElementById('NoofStudents1').value = '';    
//        var corSubject, corCoordinatorName, corNOofHours, corNoofStudents;
//        corSubject = cor.Subject;
//        corCoordinatorName = cor.CoordinatorName;
//        corNOofHours = cor.NOofHours;
//        corNoofStudents = cor.NoofStudents;
//        creatNewDiv(corSubject, corCoordinatorName, corNOofHours,corNoofStudents);
//    }
//}
//
//function creatNewDiv(corSubject, corCoordinatorName, corNOofHours,corNoofStudents) {
// 
//      var div = document.createElement('div');
//        var corSubject, corCoordinatorName, corNOofHours, corNoofStudents;
//       var divHTML = '<div class="div"><label>Subject</label> <label></label>&Subject1 </div> <div class="div"><label>Coordinator Name</label> &CoordinatorName1</div><div class="div"><label>NO of Hours</label> &NOofHours1</div><div class="div"><label>No of Students</label> &NoofStudents1</div><hr/>';
//        divHTML = divHTML.replace("&Subject1", corSubject);
//        divHTML = divHTML.replace("&CoordinatorName1", corCoordinatorName);
//        divHTML = divHTML.replace("&NOofHours1", corNOofHours);
//        divHTML = divHTML.replace("&NoofStudents1", corNoofStudents);
//        div.innerHTML = divHTML;
//        document.getElementById('DynamicControls').append(div);
//};
//
//function setValues(e) {
//    console.log(e);
//      if(e == "0")
//    {    
//        Course.setSubject = document.getElementById('Subject').value;
//        Course.setCoordinatorName = document.getElementById('CoordinatorName').value;
//        Course.setNOofHours = document.getElementById('NOofHours').value;
//        Course.setNoofStudents = document.getElementById('NoofStudents').value;
//        setValueOfControls(e, Course);
//    }
//   else
//    {    
//        var courseIns = new courseClass(document.getElementById('Subject1').value, document.getElementById('CoordinatorName1').value,
//                    document.getElementById('NOofHours1').value,   document.getElementById('NoofStudents1').value                 
//                                       )
//        setValueOfControls(e, courseIns);
//    }
//}
//
//document.getElementById('SetValues').addEventListener('click', setValues.bind(this,0));
//document.getElementById('SetValues1').addEventListener('click', setValues.bind(this,1));

//Day 41
//function Product (id, price, name) {
//};
//   
//p = new Product();
//console.log(Object.prototype.isPrototypeOf(p)); //true, all objects point to Object

//Day 42
//function Product (id, price, name) {
//    this.id = id;
//    this.name = name;
//    this.price = price;
//
//};
//   
//p = new Product(1, 90, 'Jacket'); 
//p2 = new Product(2, 120, 'shirt');
//
//
//Product.prototype.discount = function(prec) {
//    return this.price - this.price * prec;
//}
//
//console.log(p.discount(0.2));
//console.log(p2.discount(0.3));
//console.log(p2.discount === p2.discount);
//
////Day 43 + Day 44
//
//var arrOfProducts = [];
//arrOfProducts.push(p);
//arrOfProducts.push(p2);
//
//function func(value, index){
//    console.log('Product ' + value.id+ ' originally costs ' + value.price + ' but now it costs ' + value.discount(0.2))
//}
//
//arrOfProducts.forEach(func);
//
////Day 45
//
////Using another approach
//for(var i =0; i< arrOfProducts.length;i++)
//    {
//        console.log('Product ' + arrOfProducts[i].id+ ' originally costs ' + arrOfProducts[i].price + ' but now it costs ' + arrOfProducts[i].discount(0.2))
//    }

//Day 46 + Day 47

//function Student(name, GPA){
//    this.name = name;
//    this.GPA = GPA;
//}
//
//var names = ['Sara', 'Ghada', 'Nouf', 'Amal', 'Sondos'];
//var GPA = [4.8, 4.5, 5, 4, 4.9];
//var studentsList = [];
//
//function addStudent(value, index){
//     let st = new Student(names[index], GPA[index]);
//     studentsList.push(st);
//    }
//
//
//names.forEach(addStudent);
//
//
//function showStudents(value){
//    console.log('Sudent Name: ' + value.name+ ' - GPA: ' + value.GPA )
//}
//
//studentsList.forEach(showStudents);


//Day 48
//var arr = new Array(2);
//console.log(arr.length);
//arr.length = 4;
//console.log(arr.length);


//Day 49
//var names = ['Sara', 'Ghada', 'Nouf', 'Amal', 'Sondos'];
//
//names[0] = 'Ruba'; //change value of index 0
//names[names.length+1]  = 'Sara'; // Skip one index and then Add element 
//console.log(names);

//Day 50
//var names = ['Sara', 'Ghada', 'Nouf', 'Amal', 'Sondos'];
//
//delete names[0] ;
//console.log(names);
//names.length = 0;
//console.log(names);

//Day 51

//var names = ['Sara', 'Ghada', 'Nouf', 'Amal', 'Sondos'];
////Using for loop
//console.log('names before sort');
//for(var i =0; i< names.length; i++)
//    {
//        console.log( ' - ' + names[i]);
//    } 
//
//
//names.sort();
//console.log('names after sort');
//function afterSort(value){
//    console.log(' - ' + value)
//}
//
//names.forEach(afterSort);

//Day 52
//var mainArr = new Array(10);
//
//console.log(mainArr.length);
//for(var i = 0; i < mainArr.length; i++)
//    {
//        mainArr[i] = new Array(10);
//    }
//
//
//for(var x = 0; x < mainArr.length; x++)
//    {
//        for(var y = 0; y < mainArr[x].length; y++){
//            var col = y+1;
//            var row = x +1
//            mainArr[x][y] = col * row;
//        }
//    }
//
//
//function  showAllElements(value, index){
//    const i = index +1;
//    console.log( i + ' Multiplication Table -- ' + value); 
//}

//mainArr.forEach(showAllElements);

//showAllElements[3][4];

//Day 53 + Day 54
//
//document.addEventListener("DOMContentLoaded", function() {   setEventListner()});
//
//
//var DataEntity = {
//    ArrEmployee: [],
//    DeleteEmp: function(id) {
//        this.ArrEmployee.splice(id,1);
//    }
//
//}
//
//let Employee = document.getElementById('Employee').value;
//let Job = document.getElementById('JobRole').value;
//let Experince = document.getElementById('Experience').value;
//
//var Controller = {
// AddEmp: function(Employee, Job, Experince){
//       View.showNewEmp(View.GetLastID(), Employee, Job, Experince);
//       DataEntity.ArrEmployee[DataEntity.ArrEmployee.length] = [Employee, Job, Experince];
//   },
//
//    FilterEmp: function(Exp){
//        // console.log(DataEntity.FilterArrEmployee(Exp));
//         View.FilterEmp(Exp);
//   },
//
//    RmvFilterEmp: () => { View.RmvFilter()},
//    DeleteEmp: function(id) {
//        DataEntity.DeleteEmp(id);
//        View.DeleteEmp(id);
//    }
//    
// 
//    
//}
//
//var View = {
//    table : document.getElementById('DynamicEmpData'),
//    GetLastID: function(){
//        var id;
//        if(this.table.rows.length <=1)
//            {
//             id =0;   
//        }
//        else{
//            console.log(this.table.rows[this.table.rows.length - 1 ].id);
//            id = parseInt(this.table.rows[this.table.rows.length - 1 ].id) + 1; 
//        }
//        return id;
//    },
//    showNewEmp: function(ID, Employee, Job, Experince){
//            console.log('judd');
//
//       var tr = document.createElement('tr');
//       var Employeetd = document.createElement('td');
//       var Jobtd = document.createElement('td');
//       var Experincetd = document.createElement('td');
//       var deletetd = document.createElement('td');
//        Employeetd.innerHTML = Employee;
//        Jobtd.innerHTML = Job;
//        Experincetd.innerHTML = Experince;
//        deletetd.innerHTML = 'Delete';
//        
//        tr.appendChild(Employeetd);
//        tr.appendChild(Jobtd);
//        tr.appendChild(Experincetd);
//        tr.appendChild(deletetd);
//        tr.id = ID;
//        
//        deletetd.addEventListener('click', Controller.DeleteEmp.bind(this,  tr.id));
//
//        //tr.setAttribute("id", ID);
//        this.table.appendChild(tr);
//    },
//    
//    FilterEmp: function(exp){
//        this.RmvFilter();
//            for(var i = 1, row; row = document.getElementById('DynamicEmpData').rows[i]; i++)  
//                {
//                    if (exp != row.cells[2].innerText)
//                        {
//                            console.log('hide' +row.id);
//                            document.getElementById(row.id).classList.add('hidden');
//                        }
//               }
//      },
//    
//  RmvFilter: function() {
//        
//         for(var i = 1, row; row = this.table.rows[i]; i++)  
//                {
//                    document.getElementById(row.id).classList.remove('hidden');
//                }
//        },
//    DeleteEmp: function(id) {
//            document.getElementById(id).remove();  
//    }
//}
//
//
//function setEventListner() {
//    document.getElementById('AddEmployee').addEventListener('click',function() { Controller.AddEmp(document.getElementById('Employee').value, document.getElementById('JobRole').value, document.getElementById('Experience').value)});
//    
//    document.getElementById('ExperienceFilterBtn').addEventListener('click',function() { 
//        Controller.FilterEmp(document.getElementById('ExperienceFilter').value)});
//    
//    document.getElementById('RmvExperienceFilterBtn').addEventListener('click',function() { 
//        Controller.RmvFilterEmp()});
//      
//}


//Day 55
//
//var alphabetArr = new Array(26);
////document.write(alphabetArr.length);
//
//for(var i=97,x= 0; i<123, x < alphabetArr.length; x++)
//    alphabetArr[x] = String.fromCharCode(i++) 
//
//document.write(alphabetArr);
//document.write('<br> -------------------- <br>');
//
//
//document.write(alphabetArr.join());
//document.write('<br> -------------------- <br>');
//
//
//
//document.write('<br> reverse Array: '+ alphabetArr.reverse());
//document.write('<br> -------------------- <br>');
//
//
//var subArr = [];
//subArr = alphabetArr.slice(0,5);
//document.write('original array: ' + alphabetArr);
//document.write( '<br> sub Array: '+ subArr);
//
//document.write('<br> -------------------- <br>');
//
//
//
//document.write('<br> concat Array: '+ alphabetArr.concat(subArr));
//document.write('<br> -------------------- <br>');
//
//
//
//document.write('<br> sort Array: '+ alphabetArr.sort());
//document.write('<br> -------------------- <br>');
//
////Day 56
//
//document.write('<br> Splice Array: '+ alphabetArr.splice(0,1, '1'));
//document.write('<br> Full Array: '+ alphabetArr);
//
//document.write('<br> -------------------- <br>');
//
//
//document.write('<br> push Array: '+ alphabetArr.push(2));
//document.write('<br> Full Array: '+ alphabetArr);
//
//document.write('<br> -------------------- <br>');
//
//
//document.write('<br> pop Array: '+ alphabetArr.pop());
//document.write('<br> Full Array: '+ alphabetArr);
//
//document.write('<br> -------------------- <br>');
//
//
//document.write('<br> unshift Array: '+ alphabetArr.shift());
//document.write('<br> Full Array: '+ alphabetArr);
//
//document.write('<br> -------------------- <br>');
//
//
//
//document.write('<br> unshift Array: '+ alphabetArr.unshift('a'));
//document.write('<br> Full Array: '+ alphabetArr);
//
//document.write('<br> -------------------- <br>');


//Day 57
//document.write('<br> Array to string: '+ alphabetArr.toString());
//
//document.write('<br> -------------------- <br>');
//
//
//var correspondingArr = new Array(26);
//let s = alphabetArr.join('');
//
//function showCharCode(value, index, arr)
//{
//    correspondingArr[index] = s.charCodeAt(index);
//    if(value == 'z')
//            document.write('<br> corresponding Array : '+ correspondingArr);
//}
//
//
//
//alphabetArr.forEach(showCharCode);
//document.write('<br> Array : '+ alphabetArr);
//
//
//document.write('<br> -------------------- <br>');


//Day 58

//var arr = [4,9,16,25, 4, 36];
//
//document.write('<br> map Array: '+ arr.map(Math.sqrt));
//document.write('<br> -------------------- <br>');
//
//
//document.write('<br> filter Array: '+ arr.filter(function(n) { return n > 10 }));
//document.write('<br> -------------------- <br>');
//
//
//document.write('<br> every Array: '+ arr.every(function(n) { return n%2==0 }));
//document.write('<br> -------------------- <br>');
//
//document.write('<br> some Array: '+ arr.some(function(n) { return n%2==0 }));
//document.write('<br> -------------------- <br>');
//
//
//
//document.write('<br> reduce Array: '+ arr.reduce(function(total, num) { return total - num;}));
//document.write('<br> -------------------- <br>');
//
//
//document.write('<br> reduce right Array: '+ arr.reduceRight( function(total, num) { return total - num;}));
//document.write('<br> -------------------- <br>');
//
//
//document.write('<br>index of Array: '+ arr.indexOf(4));
//document.write('<br> -------------------- <br>');
//
//document.write('<br>last index of Array: '+ arr.lastIndexOf(4));
//document.write('<br> -------------------- <br>');

//Day 59

//var s = "Strings as arrays";
//var x ="test";
//
//document.write('<br>char at - string: '+ s.charAt(5));
//document.write('<br> -------------------- <br>');
//
//document.write('<br>INCLUDE - string: '+ s.includes('j'));
//document.write('<br> -------------------- <br>');
//
//document.write('<br>search - string: '+ s.search('j'));
//document.write('<br> -------------------- <br>');
//
//document.write('<br>to upper - string: '+ s.toUpperCase());
//document.write('<br> -------------------- <br>');
//
//document.write('<br>to lower - string: '+ s.toLowerCase());
//document.write('<br> -------------------- <br>');
//
//document.write('<br>locale compare - string: '+ s.localeCompare(x));
//document.write('<br> -------------------- <br>');
//
//document.write('<br>locale compare - string: '+ x.localeCompare(s));
//document.write('<br> -------------------- <br>');


//Day 60 + Day 61
//var first = [1, 2, 3, 5, 8, 13];
//var second = [1, 2, 3, 4, 8, 13];
//
//
//function compare(value1, index1){
//    second.forEach(function(value, index){ if(value1 != value && index1 == index) { 
//        document.write('index: ' + index + ' value: ' + value);
//    }
//    });
//}
//
//first.forEach(compare);

//Day 62

//function
//function spellName(name){
//     var arr = name.split('');
//      arr.forEach((value) => document.write(value + '<br>'));
//}
//
//spellName('sondos');
//document.write('------------------------------------------<br>');
////return function
//function returnSpellName(name){
//     return  name.split('');
//}
//
////store fnction as variable
//var returnResult = returnSpellName('sondos');
//returnResult.forEach((value) => document.write(value + '<br>'));
//document.write('------------------------------------------<br>');
//
////nested functions call itself
//(function nestedFunctions(name){  
//    var arr = name.split('');
//    arr.forEach(spelling);
//    function spelling (value){
//     document.write(value + '<br>');
//    }
//})('sondos');
//document.write('<br>------------------------------------------<br>');
//
//
//var myFunction1 = function (a, b) {return a * b}
//document.write(myFunction1(4, 3));
//document.write('<br>------------------------------------------<br>');
//console.log(myFunction1);
//
//
//var myFunction = new Function("a", "b", "return a * b");
//document.write(myFunction(4, 3));
//document.write('<br>------------------------------------------<br>');
//console.log(myFunction);



//Day 64

////name is a property of global object.
//var name = 'Sondos';
//
//function printName(){
//    document.write(this.name +'<br>');
//}
//
////print name pro[perty of global object]
//printName();
//
//var person ={
//    name: 'Sara',
//    age: 26
//}
//
////print name propert of person object
//this.printName.call(person);

////Day 65
//var person ={
//    printAge: function(birthdate){
//        document.write( new Date().getFullYear() - birthdate);
//    }
//}
//
//
//var person1 ={
//    name: 'Sondos'
//}
//
//
//person.printAge.apply(person1, [1995]);
//document.write('<br>');
//
//
//
//Day 66
//var counter = 0;
//function add() {
// counter += 1;
//}
//add();
//add();
//add();
//document.write(counter);
//document.write('<br>');
//
//function add1() {
// var counter = 0;
// counter += 1;
//}
//
//add1();
//add1();
//add1();
//document.write(counter);
//document.write('<br>');
//
//function add2() {
// var counter = 0;
// counter += 1;
// return counter;
//}
//add2();
//add2();
//add2();
//document.write(add2());
//document.write('<br>');
//
//var add3 = (function () {
// var counter = 0;
// return function () {counter += 1; return counter}
//})();
//add3();
//add3();
//add3();
//document.write(add3());
//document.write('<br>');


//Day 67 + Day 68

//reference https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/

//const memorize = function(fn){
//    let cashe = {};
//    return function(...arg){
//        var n = arg[0];
//        if(n in cashe)
//            {
//                console.log('reterive from cashe');
//                return cashe[n];
//            }
//        else {
//            console.log('insert in cashe');
//            var result = fn(n);
//            cashe[n] = result;
//            return  result;
//        }
//    }
// }
//
//function increamentNo(a){
//    return a + 1;
//}
//
//const memoize = memorize(increamentNo);
//document.write(memoize(increamentNo(1)) +'<br>');
//document.write(memoize(increamentNo(1)) +'<br>');
//document.write(memoize(increamentNo(2)) +'<br>');
//
////Day 69
//window.onload = function() {
//    
//    blackHeader = document.getElementById('black');
//    whiteHeader = document.getElementById('white');
//    grayHeader = document.getElementById('gray');
//    
//    arr =  [blackHeader, whiteHeader, grayHeader];
//    arr.forEach(addEv);
//    function addEv(value){ 
//     value.onclick = function (){
//       // console.log(value);
//        var s = value.id;
//        //console.log(s.classList.contains(s.toString()));
//         if(value.classList.contains(s.toString()))
//             document.body.style.background = s.toString();
//        else
//            document.body.style.background = '#5c7582';   
//      document.getElementById(s).classList.toggle(s.toString());
//
//    };
//}
//  
//};

//Day 71 + Day 71
//let cuurCount ;
//var i
// var w;
//function startInterval(){ 
//   i = setInterval(increaseCount, 100);}
//startInterval();
//function increaseCount(){
//    cuurCount = parseInt(document.getElementById('count').innerHTML);
//    console.log(cuurCount);
//    cuurCount = cuurCount +1;
//    document.getElementById('count').innerHTML = cuurCount;
//}
//
//function stopCounting(){
//    clearInterval(i);
//   
//    w = window.open("", "myWindow", "width=400, height=200");
//    w.document.write('count =' + cuurCount); //+ ' close this window to continue counting';
//}

//Day 72 + Day 73
//window.onload = function() {
//    var i;
//    var name;
//     
//    blackHeader = document.getElementById('black');
//    whiteHeader = document.getElementById('white');
//    grayHeader = document.getElementById('gray');
//    wrong =  document.getElementById('wrong');
//    correct =  document.getElementById('correct');
//    currname =  document.getElementById('name');
//    name = prompt('Enter your Name');
//    currname.innerHTML = name;
//    
//    function startGaming(){
//        
//    i = setInterval(recolor, 450);
//    }
//    function recolor() {
//        var x =  document.body.style.backgroundColor;
//        if(x == "black"){
//            document.body.style.backgroundColor = "gray";
//        }
//        else if(x == "gray")
//            document.body.style.backgroundColor = "white";
//        else 
//            document.body.style.backgroundColor = "black";
//        //console.log(document.body.style.backgroundColor);
//            
//    }
//        arr =  [blackHeader, whiteHeader, grayHeader];
//    arr.forEach(addEv);
//    function addEv(value){ 
//     value.onclick = function (){
//        //console.log(value);
//        
//        var s = value.id;
//         if(s == document.body.style.backgroundColor){
//             alert('Correct !');
//             clearInterval(i);
//             correct.innerHTML = parseInt(correct.innerHTML) +1;
//         }
//         else{
//             alert('Wrong !');
//             clearInterval(i);
//              wrong.innerHTML = parseInt(wrong.innerHTML) +1;
//         }
//
//    };
//        startGaming();
//}
//  
//};


//Day 74 + Day 75
//$("#openWebsite").click(
//function() {
//  $("#dialog").dialog({
//    resizable: false,
//    height: "auto",
//    width: 400,
//    modal: true,
//    buttons: {
//      "open  new window": function() {
//          window.open("https://saudidev.org", "", "width=200,height=100")
//      },
//      "open New Tab": function() {
//          window.open("https://saudidev.org");
//      }
//    }
//  });
//});

//Day 76
//document.getElementById('reset').onclick = function(){
//       document.getElementsByName('form').forEach(function(cur){
//        cur.value = '';
//    });
//};

//Day 77 + Day 78

//var Employee = new Map();
//
//Employee.set('Name', 'Sondos');
//Employee.set('Age', 24);
//Employee.set('YearOfExperience', 1);
//
//var divmap = document.getElementById('map');
//
//Employee.forEach(function(cur, key) { 
//    var d = document.createDocumentFragment();
//
// var h = document.createElement('H2');
//var string = document.createTextNode(key);
//var v = document.createElement('H3');
//v.innerHTML = cur;
//    
//h.appendChild(string);
//d.appendChild(v);
//
//d.insertBefore(h,v);
//divmap.appendChild(d);
//
//});


//Day79
//var Employee = new Map();
//
//Employee.set('Name', 'Sondos');
//Employee.set('Age', 24);
//Employee.set('YearOfExperience', 1);
//
//var divmap = document.getElementById('map');
//
//Employee.forEach(function(cur, key) { 
//    var d = document.createDocumentFragment();
//
// var h = document.createElement('H2');
//var string = document.createTextNode(key);
//var v = document.createElement('H3');
//v.innerHTML = cur;
//    
//h.appendChild(string);
//d.appendChild(v);
//
//d.insertBefore(h,v);
//divmap.appendChild(d);
//
//});
//
//
//while(divmap.hasChildNodes() && (divmap.getElementsByTagName('h2').length>=1))
//{
//var d = divmap.getElementsByTagName('h2')[0];
//divmap.removeChild(d);
//}

//Day 80

//
//function myFunction() {
// var elmnt = document.getElementById("myDIV");
// var x = elmnt.scrollLeft;
// var y = elmnt.scrollTop;
// document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y +
//"px";
//}

//Day 81 + Day 82

//Get top most element at specific coordinator
//var el = document.elementFromPoint(10,10); //Answer <h2 id="1">1</h2>
//console.log(el);


//Day 83
//function welcome(){
//    alert('hello');
//}

//Day 84
//function mouseOver(){
// console.log('mouse over');
//}
//
//function mouseOut(){
// console.log('mouse out');
//
//}

//Day 85
//$('.touchedDiv').bind('touchend', function() {
//  alert('touched !"');});
//document.getElementById ("touchedDiv").addEventListener('touchend', function() {
//  alert('touched !');})

//Day 86
//var div = document.getElementById("ClickedDiv");
//div.addEventListener('click', clickText);
// function clickText(){
//  div.innerHTML ='Clicking !';  
//  setTimeout(function() {div.innerHTML = 'clicked !'}, 2000);
//  div.removeEventListener('click', clickText);
//};

//Day 87
//var cb = document.getElementById("myCheckbox");
//cb.addEventListener('click', function(event){
// event.preventDefault();
//});
//

//Day 88 + Day 89
//function mousedown(){
// console.log('mouse down');
//}
//
//function mouseup(){
// console.log('mouse up');
//
//}

//Day 90
//console.log(window.location.href);
//var url = new URL("https://example.com/?name=Jonathan%20Smith&age=18");
//console.log(url.host);
//
//var params = (url).searchParams;
//
//
//for ([value,key] of  params)
//    console.log(value +'='+ key);

//Day 91
//function goForward(){
//    window.history.forward();
//}
//
//function goBack(){
//    window.history.back();
//}

//Day 92
//console.log(navigator.appName);
//console.log(navigator.appVersion);
//console.log(navigator.language);
//console.log(navigator.vendor);
//console.log(navigator.appCodeName);
//console.log(navigator.cookieEnabled);
//console.log(navigator.platform);
//console.log(navigator.product);
//console.log(navigator.onLine);

//Day 93
//function timer()
//{
//    alert('3 seconds later');
//}
//
//
//var t = setInterval(timer2, 1000);
//let x = 0
//
//function timer2()
//{
// x = x+1;
// document.getElementById('intervalValue').innerHTML = x;
//    if(x >= 5)
//        clearInterval(t);
//}

//Day 94
function setCookeie(name, value, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 1000));
    
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"
}


function getCookie(name) {
    var name = name + "=";
    var dc = decodeURIComponent(document.cookie);
    var cookiesElements = []
       cookiesElements = dc.split(';');
//
//cookiesElements.forEach(function(val, index) {
//       while (val.charAt(0) == ' ') {
//         val = val.substring(1);
//         }
//         if (val.indexOf(name) == 0) {
//             return val.substring(name.length, val.length);
//             }
//    });
    
     for(var i = 0; i < cookiesElements.length; i++) {
         var c = cookiesElements[i];
         while (c.charAt(0) == ' ') {
         c = c.substring(1);
         }

         if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
         }
         }

    
    return '';
 
}


function checkCookie() {
 var user=getCookie("username");
 if (user != "") {
 alert("Welcome again " + user);
 } else {
 user = prompt("Please enter your name:","");
 if (user != "" && user != null) {
 setCookeie("username", user, 30);
 }
 }
}

checkCookie();

//document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


//Day 95 + Day 96
console.log(window.location.href);
var url = new URL("https://example.com/?name=Jonathan%20Smith&age=18");
console.log(url.host);

var params = (url).searchParams;
for ([value,key] of  params)
    console.log(value +'='+ key);
console.log('----------------');

url.searchParams.append('major', "CS");

var newparams = (url).searchParams;
for ([value,key] of  newparams)
    console.log(value +'='+ key);

//Day 97

function clickCounter() {
 if (typeof(Storage) !== "undefined") {
 if (localStorage.clickcount) {
 localStorage.clickcount = Number(localStorage.clickcount)+1;
 } else {
 localStorage.clickcount = 1;
 }
 document.getElementById("result").innerHTML = "You have clicked the button " +
localStorage.clickcount + " time(s).";
 } else {
 document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
 }
}

function clickCounterSession() {
 if (typeof(Storage) !== "undefined") {
 if (sessionStorage.clickcount) {
 sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
 } else {
 sessionStorage.clickcount = 1;
 }
 document.getElementById("resultSession").innerHTML = "You have clicked the button " +
sessionStorage.clickcount + " time(s) in this session.";
 } else {
 document.getElementById("resultSession").innerHTML = "Sorry, your browser does not support web storage...";
 }
}


//Day 98

var w;
function startWorker() {
 if(typeof(Worker) !== "undefined") {
 if(typeof(w) == "undefined") {
 w = new Worker("demo_workers.js");
 }
 w.onmessage = function(event) {
 document.getElementById("Workerresult").innerHTML = event.data;
 };
 } else {
 document.getElementById("Workerresult").innerHTML = "Sorry, your browser does not support Web Workers...";
 }
}
function stopWorker() {
 w.terminate();
 w = undefined;}




//Day 99

if(typeof(EventSource) !== "undefined") {
 var source = new EventSource("demo_sse.php");
 source.onmessage = function(event) {
 document.getElementById("result").innerHTML += event.data + "<br>";
 };
} else {
 document.getElementById("result").innerHTML = "Sorry, your browser does not support serversent events...";
}

//Day 100
var x = document.getElementById("demo");
function getLocation() {
 if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(showPosition);
 } else {
 x.innerHTML = "Geolocation is not supported by this browser.";
 }
}
function showPosition(position) {
 x.innerHTML = "Latitude: " + position.coords.latitude +
 "<br>Longitude: " + position.coords.longitude;
}








