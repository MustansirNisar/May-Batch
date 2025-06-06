 let fruits = ["Apple", "Banana", "Mango", "Orange"]
 let nums = [12, 44, 55, 66]

 let newArray = fruits.concat(nums)
 console.log(newArray)

//Template Literals
 let a = 20;
 let b =50;
 let sum = a +b
 console.log(`The sum of ${a} and ${b} is ${sum}`)
 console.log(`The sum of a and b is ${20+70}`)

 console.log(fruits[0])
 console.log(fruits[2])

 fruits[1] = "Grapes"
 console.log(fruits)
 console.log(fruits.length)

 for(let i=0; i<fruits.length; i++){
     console.log(i,":", fruits[i])
 }

// fruits.push("Guava")
// let rem = fruits.pop()
// console.log(fruits)
// console.log("Deleted element: ",rem)


// fruits.unshift("Grapes")
// fruits.shift()
// console.log(fruits)
