

 function greet(){    //Function Definition or Declaration
     console.log("HEllO")
     console.log("How are you?")
 }

 greet(); //Function Call

 function greet(){
     for(let i=0; i<10; i++){
         console.log("Hello and Welcome")
     }
 }

 greet();
 greet();

 function greet(fullName){    //Function with Parameters
     console.log("Welcome", fullName, "to this session") 

 }


 greet("Pema"); //Calling with an Argument

 function sum(a, b){  //Multiple Arguments
     console.log("The sum of the numbers is: ", a+b);
 }

 sum(10, 20)

 function add(a,b){ //a and b are parameters
     console.log("Before the return statement")        
     console.log("Something else")        
     return a+b;          //Return value
     console.log("After the return statement")        
 }
 console.log(add(2,18)) //Function call with a Return Value

 console.log(a)

 let sum = add(4, 2)
 console.log(sum)
 function num(n){
     if(n>0) return "positive"  //Multiple Return Statements in a single Function
     if(n<0) return "Negative"
     return "Zero"
 }

 console.log(num(-12))

 let greet = function(fullName){
     console.log("Hello", fullName)
 }

 greet("Samar")

 let greet = (fullName)=>{
     return "Hello " + fullName
 }

 console.log(greet("suyes"))

 let greet = ()=>{
     console.log("hello")  //Arrow Function
 }
 greet();

 let exp = a=>a**2;  //Arrow Function with a single parameter and function Statement

 console.log(exp(2))

 const fruits = ["apple", "Banana", "Cherry", "Mango"]

 fruits.forEach((current, position, arr)=>{
     console.log(current.toUpperCase(), "at index", position, "in the array", arr); //For-each Loop/method
 });

 const numbers = [1, 3, 5, 6]
 let newarr = numbers.map((num)=>{  //Map method
     return num * 2;
 })
 console.log(newarr)
 console.log(numbers)

// const numbers = [1, 2, 3, 4, 5, 6 ]
// let evenNumbers = numbers.filter((num)=>{
//     return num % 2 === 0;
// })

// console.log(evenNumbers)










