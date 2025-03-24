// let heading = document.getElementsByTagName("h1");
// console.log(heading);
// console.log(heading[0]);

// let heading1 = document.getElementsByClassName("heading");
// console.log(heading1);

// let textpara = document.getElementById("text");
// console.log(textpara);

//querySelector(css selector) one thing(the first one it sees)
//., #, div p

//queryselectorAll
// let firstPara = document.querySelector("p");
// console.log(firstPara);

// let allPara = document.querySelectorAll("p");
// console.log(allPara);

//interacting with content on the document
//textcontent innerText innerHtml

const heading = document.querySelector(".heading");
console.log(heading.textContent);
console.log(heading.innerText);
heading.innerText += " -JS is Fun";

const container = document.querySelector("div");
container.innerHTML += "<a href='https://google.com'>Google</a>";
console.log(container.innerHTML);

const intro = document.querySelector("h2");
function initials(myName) {
  return myName
    .toUpperCase()
    .split(" ")
    .map((initial) => initial[0])
    .join(".");
  // .map((part) => part[0])
  // .join(".");
}
// console.log(initials("John Doe"));
// console.log(initials("Baba Thiago"));

intro.textContent += ` ${initials("Baba Thiago")}`;

let myLink = document.querySelector(".myLink");

myLink.innerText = "Facebook";
myLink.setAttribute("href", "https://facebook.com");
myLink.setAttribute("target", "_blank");
myLink.getAttribute("target");
console.log(myLink.getAttribute("target"));

//interact with styles
myLink.style.textDecoration = "none";
myLink.style.color = "red";

let btn = document.querySelector("button");

// btn.className = "mybtn";
btn.classList.add("mybtn");
btn.classList.add("isaac");

//cretaing a new element
const section = document.createElement("section");
section.innerHTML = "<h1>Improvie adapt overcome</h1>";

section.className = "section";
let front = document.querySelector(".front");

front.appendChild(section);

const body = document.querySelector("body");

const testbtn = document.querySelector(".testbtn");
testbtn.addEventListener("click", () => {
  console.log("link Clicked");
  body.style.backgroundColor = "red";
});
