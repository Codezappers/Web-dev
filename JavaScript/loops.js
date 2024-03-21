//for (let i= 1;i<=5;i++){
  //  console.log("Hi this is javascript");
//}
let sum =0;
for (let  i =0;i<=5;i++){
   sum = sum +i;
}
console.log(sum);

k=1;
while(k<=6){
    console.log("k=",k);
    k++;
}

c=1;
do{
    console.log("c=",c);
    c++;
}while(c<=14);

let str = "Aden JOhn";
for (let f of str) {
    console.log("f =" ,f);
} 

let student = {
    name:"Akshun",
    age:13,
    CGPA: 6.8,
    isPass:true
};
for (let key in student){
    console.log("key = ",key ,"value =", student[key]);
}


//printing all even numbers

for(let num =0;num<=100;num++){
    if(num%2 ===0){
        console.log("num=", num);
    }
}

