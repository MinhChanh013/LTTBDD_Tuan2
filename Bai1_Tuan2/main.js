const body = document.querySelector("body");

const textA = document.createElement("span");
const newDivA = document.createElement("input");
newDivA.setAttribute("class", "inputA");
textA.innerHTML = "a: ";
newDivA.placeholder = "Input A";

const textB = document.createElement("span");
const newDivB = document.createElement("input");
newDivB.setAttribute("class", "inputB");
textB.innerHTML = "b: ";
newDivB.placeholder = "Input B";

const buttonSum = document.createElement("button");
buttonSum.setAttribute("class", "btnSum");
buttonSum.innerText = "Sum";

const course = document.createElement("span");
course.setAttribute("class", "course");

body.append(
  textA,
  newDivA,
  document.createElement("p"),
  textB,
  newDivB,
  document.createElement("p"),
  buttonSum,
  course
);

course.style.marginLeft = "10px";

document.querySelector(".btnSum").addEventListener("click", () => {
  let sum = parseInt(document.querySelector(".inputA").value) + parseInt(document.querySelector(".inputB").value);
  course.innerHTML = sum;
});
