let body = document.querySelector("body")
let box_img = document.querySelector(".box")
let inp = document.querySelector(".inp1")
let add = document.querySelector(".add")
let text = document.querySelector(".text")
let form = document.querySelector(".form")
form.addEventListener("submit",(e)=>{
    let p = document.createElement("p")
    e.preventDefault()
    p.innerHTML += `<div style="display:flex;   " class="box2">  <input type="radio">${inp.value}</div>`

    box_img.append(text)
   text.appendChild(p)
   
   
   inp.value = ' '
   

})