let a=5;
let b=8;
console.log("a + b =", a+b);
console.log("a % b =", a%b);
console.log("a ** b =", a**b);
console.log("a  b =", a+b);
a++;
console.log("a++ =",a);
++a;
console.log("++a =",a);
a--;
console.log("a-- =",a);
--a;
console.log("--a =",a);
a += 4;
console.log("a+= =",a);
a -= 4;
console.log("a-= =",a);

//let condition1 = a>b;
//let condition2 = a  === 5 ;
//console.log("condition1 && ccondition2 =" , condition1 &&condition2);

//let condition1 = a>b;
//let condition2 = a  === 5 ;
//console.log("condition1 || ccondition2 =" , condition1 ||condition2);

//let condition1 = a>b;
//console.log("condition1 !=" , !condition1);
 //let num = 45;
 //if(num % 2 === 0){
    console.log(num,"is div by 2");
 //}else if(num % 5 === 0){
        console.log(num , "is div by 5");
    }
 //else{
   // console.log(num, 'is not div')
 //}

 //let name = prompt("Hello!");
 //console.log(name);

 let score = prompt("enter your score (0-100):");
 let grade;
 
 if (score>=90 && score<=100){
    grade = "A";
 }
    else if (score>=70 && score<=89){
    grade = "B";
 }
    else if (score>=60 && score<=69){
    grade = "C";
 }
    else if (score>=50 && score<=59){
    grade = "D";
 }
    else if (score>=0 && score<=49){
    grade = "F";
 }

 console.log("according to your score, your grade is " , grade);

