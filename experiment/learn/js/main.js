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

// document.addEventListener("DOMContentLoaded", (event) => {
//   function handleDragStart(e) {
//     this.style.opacity = "0.4";

//     dragSrcEl = this;

//     e.dataTransfer.effectAllowed = "move";
//     e.dataTransfer.setData("text/html", this.innerHTML);
//   }

//   function handleDragEnd(e) {
//     this.style.opacity = "1";

//     items.forEach(function (item) {
//       item.classList.remove("over");
//     });
//   }

//   function handleDragOver(e) {
//     e.preventDefault();
//     return false;
//   }

//   function handleDragEnter(e) {
//     this.classList.add("over");
//   }

//   function handleDragLeave(e) {
//     this.classList.remove("over");
//   }

//   function handleDrop(e) {
//     e.stopPropagation();
//     if (dragSrcEl !== this) {
//       dragSrcEl.innerHTML = this.innerHTML;
//       this.innerHTML = e.dataTransfer.getData("text/html");
//     }

//     return false;
//   }

//   function handleTouchStart(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     let touch = e.touches[0];
//     let dragEvent = new DragEvent("dragstart", {})
//     this.dispatchEvent(dragEvent)
//   }

//   function handleTouchMove(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     let touch = e.touches[0];
//     let mouseEvent = new MouseEvent("mousemove", {
//       clientX: touch.clientX,
//       clientY: touch.clientY,
//     });
//     this.dispatchEvent(mouseEvent);
//   }

//   function handleTouchEnd(e) {
//     let mouseEvent = new MouseEvent("mouseup", {});
//     this.dispatchEvent(mouseEvent);
//   }

//   let items = document.querySelectorAll(".option");
//   items = [...items, ...document.querySelectorAll(".blank")];
//   items.forEach(function (item) {
//     item.addEventListener("dragstart", handleDragStart);
//     item.addEventListener("dragover", handleDragOver);
//     item.addEventListener("dragenter", handleDragEnter);
//     item.addEventListener("dragleave", handleDragLeave);
//     item.addEventListener("dragend", handleDragEnd);
//     item.addEventListener("drop", handleDrop);
//     item.addEventListener("touchstart", handleTouchStart);
//     item.addEventListener("touchmove", handleTouchMove);
//     item.addEventListener("touchend", handleTouchEnd);
//   });
// });

// interact('.option .blank')
//   .dropzone({
//     accept: '.option .blank',
//     overlap: 0.75,
//     ondropactivate: function (event) {
//       event.target.classList.add('over');
//     },
//     ondropdeactivate: function (event) {
//       event.target.classList.remove('over');
//     }
//   })
//   .draggable({
//     inertia: true,
//     restrict: {
//       restriction: "parent",
//       endOnly: true,
//       elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
//     },
//     autoScroll: true,
//     onmove: function(e) {

//     },
//     onend: function (event) {

//     }
//   });

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

// use shopify's drag and drop library to make the drag and drop work
// const swappable = new Swappable.default(
// 	document.querySelectorAll('.options'),
// 	{
// 		draggable: '.option',
// 	},
// );

// swappable.on('drag:start', (e) => {e.data.source.classList.add('over');console.log('drag:start', e)});
// swappable.on('drag:move', (e) => console.log('drag:move', e));
// swappable.on('drag:over', (e) => console.log('drag:over', e));
// swappable.on('drag:stop', (e) => console.log('drag:stop', e));

// swappable.on('swappable:start', (e) => console.log('swappable:start', e));
// swappable.on('swappable:swapped', (e) => console.log('swappable:swapped', e));
// swappable.on('swappable:stop', (e) => console.log('swappable:stop', e));
