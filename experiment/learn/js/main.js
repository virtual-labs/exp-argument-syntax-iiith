window.currentTab = "default";
function changeTabs(e) {
  const task = e.target.parentNode.id;
  if (window.currentTab === task) {
    return;
  }

  if (window.currentTab != null) {
    document.getElementById(window.currentTab).classList.remove("is-active");
  }
  document.getElementsByClassName(window.currentTab)[0].classList.add("hidden");
  document.getElementsByClassName(task)[0].classList.remove("hidden");
  window.currentTab = task;
  document.getElementById(task).classList.add("is-active");
}

function handleSubmitDefault() {
  let blanks = document.getElementsByClassName("blank-default");
  let blank = false;
  for (let i = 0; i < blanks.length; i++) {
    if (blanks[i].innerHTML == "") {
      blank = true;
    }
  }
  if (blank) {
    document.getElementById('all-default').classList.remove("hidden");
    return;
  }
  document.getElementById('all-default').classList.add("hidden");
  if (
    blanks[0].innerHTML == "quantity = 1" &&
    blanks[1].innerHTML == "discount = 10" &&
    blanks[2].innerHTML == "(price - discountAmount)*quantity"
  ) {
    document.getElementById('correct-default').classList.remove("hidden");
    document.getElementById('wrong-default').classList.add("hidden");
    document.getElementById("answer").classList.remove("hidden");
    document.getElementById("complete").classList.add("hidden");
  }else{
    document.getElementById('correct-default').classList.add("hidden");
    document.getElementById('wrong-default').classList.remove("hidden");
    document.getElementById("answer").classList.add("hidden");
    document.getElementById("complete").classList.remove("hidden");
  }
}

function handleSubmitVariable() {
  let blanks = document.getElementsByClassName("blank-variable");
  let blank = false;
  for (let i = 0; i < blanks.length; i++) {
    if (blanks[i].innerHTML == "") {
      blank = true;
    }
  }
  if (blank) {
    document.getElementById('all-variable').classList.remove("hidden");
    return;
  }
  document.getElementById('all-variable').classList.add("hidden");
  if (
    blanks[0].innerHTML == "*expenses" &&
    blanks[1].innerHTML == "**info" &&
    blanks[2].innerHTML == "info.items()"
  ) {
    document.getElementById('correct-variable').classList.remove("hidden");
    document.getElementById('wrong-variable').classList.add("hidden");
    document.getElementById("answer-variable").classList.remove("hidden");
    document.getElementById("complete-variable").classList.add("hidden");
  }else{
    document.getElementById('correct-variable').classList.add("hidden");
    document.getElementById('wrong-variable').classList.remove("hidden");
    document.getElementById("answer-variable").classList.add("hidden");
    document.getElementById("complete-variable").classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  function handleDragStart(e) {
    this.style.opacity = "0.4";

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";

    items.forEach(function (item) {
      item.classList.remove("over");
    });
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("over");
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
  }

  function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }

    return false;
  }

  let items = document.querySelectorAll(".option");
  items = [...items, ...document.querySelectorAll(".blank")];
  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragenter", handleDragEnter);
    item.addEventListener("dragleave", handleDragLeave);
    item.addEventListener("dragend", handleDragEnd);
    item.addEventListener("drop", handleDrop);
  });
});
