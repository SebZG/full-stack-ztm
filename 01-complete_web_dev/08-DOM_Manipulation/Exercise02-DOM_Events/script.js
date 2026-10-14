var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var btn = document.createElement("button");

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  btn.appendChild(document.createTextNode("Delete"));
  btn.classList.add("delete");
  li.appendChild(btn);

  input.value = ""; // Clear the input field after adding the list item
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

function deleteListElement(event) {
  if (event.target.closest(".delete")) {
    event.target.parentElement.remove();
    return; // Prevent clicking delete btn from toggling the "done" class on the list item
  }
}

// Dynamic event delegation
function handleListClicks(event) {
  toggleDone(event);
  deleteListElement(event);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", handleListClicks);
