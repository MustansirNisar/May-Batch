 for(let i=0; i<10; i++ ){
     console.log("The value of i is: ", i); //For Loop
 }

Calculate the sum of first ten numbers
 let sum = 0;
 for(let i=1; i<=10; i++){
     sum = sum + i;
 }
 console.log("The sum of the first ten numbers is: ", sum);


 let i=0;
 while(i<10){
     console.log("The value of i is: ", i) //While Loop
     i++;

 }
 let i=12;
 do{
     console.log("Hello and Welcome");
     i++;
 }while(i<10);



 let message = "Welcome"
 for(let char of message ){   //for-of Loop
     console.log(char)
 }
 let size = 0;
 let fullName = "Mustansir"
 for(let letter of fullName){
     console.log(letter)
     size++;
 }
 console.log("The number of chars in the name are:", size)


let student = {
    fullName: "Safal",
    id: 10,
    age: 22,
    cgpa: 9.9,
    address:{
        add1: "NY",
        add2: "Nepal"
        },
    course: "full stack development",
    isPass: true
}
for(let key in student){    //for-in Loop to iterate through the keys of an object
    console.log(key, ":", student[key])   
}
 console.log(student)
 console.log(student.fullName)
 console.log(student.isPass)
 console.log(student.cgpa)
 console.log(student["course"])

 student.city = "NY"
 console.log(student.address.add1)

 console.log(student)
 student.cgpa = 10
 console.log(student)

 delete student.id
 console.log(student)





















