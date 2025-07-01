const todoInput = document.getElementById("todoInput");
const mainList = document.getElementById("mainList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function addTask() {
  if (todoInput.value === "") {
    alert("Anda belum masukkan apapun");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoInput.value;
    mainList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "❌";
    li.appendChild(span);
  }
  todoInput.value = "";
  saveData();

  mainList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  });
});

function saveData() {
  localStorage.setItem("data", mainList.innerHTML);
}

function showTaskList() {
  mainList.innerHTML = localStorage.getItem("data");
}

showTaskList();
