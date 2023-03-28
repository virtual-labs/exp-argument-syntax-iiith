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
    document.getElementById("all-default").classList.remove("hidden");
    return;
  }
  document.getElementById("all-default").classList.add("hidden");
  if (
    blanks[0].innerHTML == "quantity = 1" &&
    blanks[1].innerHTML == "discount = 10" &&
    blanks[2].innerHTML == "(price - discountAmount)*quantity"
  ) {
    document.getElementById("correct-default").classList.remove("hidden");
    document.getElementById("wrong-default").classList.add("hidden");
    document.getElementById("answer").classList.remove("hidden");
    document.getElementById("complete").classList.add("hidden");
  } else {
    document.getElementById("correct-default").classList.add("hidden");
    document.getElementById("wrong-default").classList.remove("hidden");
    document.getElementById("answer").classList.add("hidden");
    document.getElementById("complete").classList.remove("hidden");
  }
}

function revealAnswerDefault() {
  let options = [...document.getElementsByClassName('option')];
  let blanks = [...document.getElementsByClassName("blank-default")];
  
  for(let i = 0; i < options.length; i++) {
    if(options[i].innerHTML == "quantity = 1"){
      blanks[0].innerHTML = options[i].innerHTML;
      options[i].innerHTML = "";
    }
    if(options[i].innerHTML == "discount = 10"){
      blanks[1].innerHTML = options[i].innerHTML;
      options[i].innerHTML = "";
    }
    if(options[i].innerHTML == "(price - discountAmount)*quantity"){
      blanks[2].innerHTML = options[i].innerHTML;
      options[i].innerHTML = "";
    }
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
    document.getElementById("all-variable").classList.remove("hidden");
    return;
  }
  document.getElementById("all-variable").classList.add("hidden");
  if (
    blanks[0].innerHTML == "*expenses" &&
    blanks[1].innerHTML == "**info" &&
    blanks[2].innerHTML == "info.items()"
  ) {
    document.getElementById("correct-variable").classList.remove("hidden");
    document.getElementById("wrong-variable").classList.add("hidden");
    document.getElementById("answer-variable").classList.remove("hidden");
    document.getElementById("complete-variable").classList.add("hidden");
  } else {
    document.getElementById("correct-variable").classList.add("hidden");
    document.getElementById("wrong-variable").classList.remove("hidden");
    document.getElementById("answer-variable").classList.add("hidden");
    document.getElementById("complete-variable").classList.remove("hidden");
  }
}

function revealAnswerVariable() {
  let options = [...document.getElementsByClassName('option')];
  let blanks = [...document.getElementsByClassName("blank-variable")];
  
  for(let i = 0; i < options.length; i++) {
    if(options[i].innerHTML == "*expenses"){
      blanks[0].innerHTML = options[i].innerHTML;
      options[i].innerHTML = "";
    }
    if(options[i].innerHTML == "**info"){
      blanks[1].innerHTML = options[i].innerHTML;
      options[i].innerHTML = "";
    }
    if(options[i].innerHTML == "info.items()"){
      blanks[2].innerHTML = options[i].innerHTML;
      options[i].innerHTML = "";
    }
  }
}

function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  target.style.transform = "translate(" + x + "px, " + y + "px)";
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

interact(".drag").draggable({
  inertia: true,
  autoScroll: true,
  onmove: dragMoveListener,
  onend: function (event) {
    var target = event.target;
    target.style.transform = "";
    target.setAttribute("data-x", 0);
    target.setAttribute("data-y", 0);
  },
});

interact(".drag").dropzone({
  accept: ".drag",
  overlap: 0.01,
  ondropactivate: function (event) {
    event.target.classList.add("drop-active");
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;

    dropzoneElement.classList.add("drop-target");
    draggableElement.classList.add("can-drop");
  },
  ondragleave: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;
    // console.log(draggableElement, dropzoneElement)

    dropzoneElement.classList.remove("drop-target");
    draggableElement.classList.remove("can-drop");
  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;
    var temp = dropzoneElement.innerHTML;
    console.log(dropzoneElement.innerHTML, draggableElement.innerHTML);

    dropzoneElement.innerHTML = draggableElement.innerHTML;
    draggableElement.innerHTML = temp;

    dropzoneElement.classList.remove("drop-target");
    draggableElement.classList.remove("can-drop");
  },
  ondropdeactivate: function (event) {
    event.target.classList.remove("drop-active");
    event.target.classList.remove("drop-target");
  },
});

