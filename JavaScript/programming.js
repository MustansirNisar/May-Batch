// function greet(){
//     console.log("Hello")
// }


// setTimeout(greet, 5000); //setTimeout Function //3000 miliseconds = 3 seconds

// console.log("This is before setTimout")

// setTimeout(()=>{
//     console.log("This is inside setTimeout")
// }, 4000);

// console.log("This is after setTimeout")

// function greet(){
//     console.log("This course has been designed for you, and this is a CallBack")
// }

// function  welcome(callBck){
//     console.log("Welcome to this session")
//     callBck();
//     console.log("Have a nice day!")
// }
// welcome(greet)

// function sum(a,b){
//     console.log("The sum of the numbers is: ",a+b)
// }

// function calculator(a,b, callBck){
//     callBck(a,b);
// }

// calculator(2, 4, sum)

// function getData(id, callBck){
//     setTimeout(()=>{
//         console.log("This is the data:", id)
//        if(callBck){
//          callBck();
//        }
//     }, 2000)
// }
// getData(1, ()=>{
// //     console.log("Getting data 2")
// //     getData(2, ()=>{
// //     console.log("Getting data 3") //CallBack Hell
// //         getData(3, ()=>{
// //     console.log("Getting data 4")
// //             getData(4, ()=>{
// //     console.log("Getting data 5")
// //                 getData(5)
// //             })
// //         })
// //     })
// // });


// let promise = new Promise((resolve, reject)=>{
// //     console.log("This is a Promise")
// //     reject("There was an error while delivering the data")
// // })

// function getData(id, getNextData){
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         console.log("This is the data: ",id);
//         resolve("Successfully recieved the data")
//         // reject("There was an error") 
//         if(getNextData){
//             getNextData();
//         }
//        }, 2000)
//     })
// }
// let promise = getData(1)
//     .then(()=> getData(2))
//     .then(()=> getData(3))
//     .then(()=> getData(4))
//     .then(()=> getData(5))


// promise.then((res)=>{
//     console.log("Now that the promise has been resolved, let's go for a walk:", res)
// })

// promise.catch((err)=>{
//     console.log("Now that the promise has been rejected, let's go for a walk:", err)
// })
// async function greet() {
//     console.log("Hello")
// }

// let value = greet()

// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("This is the weather data")
//             resolve(200)
//         }, 2000)
//     })
// }
// async function getWeatherData() {
//     await api()
//     await api()
//     await api()
//     await api()
//     await api()
//     await api()

// }
// getWeatherData()
// function getData(id){
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         console.log("This is the data: ",id);
//         resolve("Successfully recieved the data")
//         // reject("There was an error") 
//        }, 2000)
//     })
// }

// async function getAllData() {
//     console.log("Getting Data 1")
//     await getData(1);    
//     console.log("Getting Data 2")

//     await getData(2);  
//     console.log("Getting Data 3")

//     await getData(3);    
//     console.log("Getting Data 4")

//     await getData(4);  
//     console.log("Getting Data 5")

//     await getData(5); 
//     console.log("Getting Data 6")

//     await getData(6); 
//     console.log("Getting Data 7")

//     await getData(7);    
// }

// getAllData()



let inp = document.getElementById("input").value
console.log(inp)


















