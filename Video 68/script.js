console.log("Abhi");

// let Boxes = document.getElementsByClassName("box");
// console.log(Boxes)

// Boxes[2].style.backgroundColor = "Red";

// document.getElementById("redbox").style.backgroundColor = "Red";

// document.querySelector(".box").style.backgroundColor = "Green";

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach( e =>{
e.style.backgroundColor = "green";
})