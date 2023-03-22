let addToButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

let data = {
  name: "Christtrooper Manus",
  id: "01",
  univ: "Sam Ratulangi University",
  email: "christtroopermanus106@student.unsrat.ac.id",

  name: "Ridel Kapulang",
  id: "02",
  univ: "Manado University",
  email: "ridelkapulang@student.unima.ac.id",
};

const fetchOptions = {
  method: "POST", // Jika mau diupdate maka diganti dengan "PUT" jika mau mengambil data bisa diganti dengan "GET"
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};

fetch(
  "https://crudcrud.com/api/25ac18915e684d36b03f757c65f41de5/toDoList",
  fetchOptions
)
  .then((response) => response.json())
  .then((data) => console.log(data));

// fetch("https://crudcrud.com/api/cbb10374adb54063b115bd051d14d6cd/toDoList")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
