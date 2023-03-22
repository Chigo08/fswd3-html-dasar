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

// API

customFetch(
  "https://crudcrud.com/api/25ac18915e684d36b03f757c65f41de5/toDoList",
  "GET"
);

// fetch("https://crudcrud.com/api/25ac18915e684d36b03f757c65f41de5/toDoList")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

function customFetch(url, type, data) {
  if (type === "GET") {
    fetch(url, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Request Sucess!");
        } else {
          console.log("Request Failed!");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  if (type === "POST" || type == "PUT") {
    fetch(url, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Request Sucess!");
        } else {
          console.log("Request Failed!");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  if (type === "DELETE") {
    fetch(url, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Request Sucess!");
        } else {
          console.log("Request Failed!");
        }
      })
      .catch((error) => console.log(error));
  }
}
