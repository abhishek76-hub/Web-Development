console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerText)
console.log(document.querySelector(".box").outerHTML)
console.log(document.querySelector(".box").tagName)
console.log(document.querySelector(".box").nodeName)
console.log(document.querySelector(".box").textContent)
console.log(document.querySelector(".box").innerHTML = "I am good")
console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
console.log(document.querySelector(".box").setAttribute("style", "display: inline"))
console.log(document.querySelector(".box").attributes)
console.log(document.querySelector(".box").removeAttribute("style"))
console.log(document.querySelector(".box").dataset)

let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by harry</b>"
div.setAttribute("class", "created");
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").append(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<b> I am under the water. Please h elp me here too much raining.... iuuuuooooo</b>")
console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)
console.log(document.querySelector(".container").classList.add("Yellow"))
console.log(document.querySelector(".container").classList.remove("Yellow"))
console.log(document.querySelector(".container").classList.toggle("red"))