console.log(window);

// Single element 
const form = document.getElementById("my-form");
console.log(document.querySelector(".container"));

//Multiple element 
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerHTML = "Name";
ul.lastElementChild.innerHTML = "<h4>Hello Again</h4>";

const btn = document.querySelector(".btn");
btn.style.background = "green";

btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".container").classList.add("bg-dark");
    console.log(e.target);
    console.log("click");
});
