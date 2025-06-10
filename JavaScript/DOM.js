 let element = document.getElementById("p1")
 console.log(element)


 let button = document.getElementById("btn")
 console.log(button)

 let divs = document.getElementsByClassName("boxes")
 console.log(divs)

 let divs = document.getElementsByTagName("div")
 console.log(divs)

 let para = document.querySelector(".boxes")
 console.log(para)

 let divs = document.querySelectorAll(".boxes")
 console.log(divs)

 let para = document.querySelector("p")

 console.log(para.tagName)

 console.log(para.textContent)
 console.log(para.innerText)

 console.log(para.innerHTML)

 let divs = document.querySelector("#parent")

 console.log(divs.firstElementChild)


 let para = document.querySelector("p")
 console.log(para.getAttribute("id"))
 console.log(para.getAttribute("class"))
 console.log(para.getAttribute("style"))


 para.setAttribute("class", "paragraph")
 para.setAttribute("style", "background-color: green")

 console.log(para.hasAttribute("style"))
 para.style.backgroundColor = "green"
 para.style.fontSize = "40px"
 para.style.color = "White"
 para.setAttribute("style", "background-color: green; font-size: 40px; color: white")
 para.classList.add("highlight")

 let target = document.querySelector("#list")

 let newel = document.createElement("li")
 newel.innerText = "Banana"

 target.after(newel)
 let mang = document.querySelector("#mango")
 mang.remove()

 let button = document.querySelector("#btn")


 button.onclick = ()=>{
     alert("You clicked the button")
      button.style.color = "green"
      button.style.height = "100px"
      button.style.border = "4px solid green"
 }


 button.onclick = ()=>{
      alert("You clicked the button")
     button.style.color = "green"
     button.style.height = "100px"
     button.style.border = "4px solid green"
 }
let button = document.querySelector("#btn")
button.addEventListener("mouseover", ()=>{
    alert("you have clicked the button")
})

button.addEventListener("mouseover", ()=>{
    button.style.color = "green"
     button.style.height = "100px"
     button.style.border = "4px solid green"
})














