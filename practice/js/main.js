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

window.onload = () => {
  document.getElementById("default-arguments").value = "";
  document
    .getElementById("default-arguments")
    .addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        submitDefault();
      }
    });
};

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function checkCollision(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

async function submitDefault() {
  let val = document.getElementById("default-arguments").value.split(",");
  let ele = document.getElementsByClassName("operand");
  let out = document.getElementById("output-default");
  if (val.length == 0 || val.length > 3) {
    out.innerHTML = "Please enter 1, 2 or 3 arguments";
    out.classList.add("wrong");
    return;
  }
  for (let i = 0; i < val.length; i++) {
    if (!isNumeric(val[i])) {
      out.innerHTML =
        "All inputs should be numeric otherwise TypeError will be thrown";
      out.classList.add("wrong");
      return;
    }
  }
  val.map((v) => parseFloat(v));
  out.classList.remove("wrong");
  if (val.length == 1) {
    out.innerHTML = val[0] * (1 + (7.0 * 10) / 100);
  } else if (val.length == 2) {
    out.innerHTML = val[0] * (1 + (val[1] * 10) / 100);
  } else {
    out.innerHTML = val[0] * (1 + (val[1] * val[2]) / 100);
  }
  val.forEach((v, i) => {
    ele[i].innerHTML = v;
  });
  anime({
    targets: ".operand",
    translateX:
      document.getElementsByClassName("obs-container")[0].clientWidth -
      100 +
      "px",
    duration: 2000,
    easing: "linear",
    direction: "normal",
  });
  let o = 0;
  let func = document.getElementById("default-function");
  let rect = func.getBoundingClientRect();
  while (true) {
    let overlap =
      checkCollision(ele[0].getBoundingClientRect(), rect) ||
      checkCollision(ele[1].getBoundingClientRect(), rect) ||
      checkCollision(ele[2].getBoundingClientRect(), rect);
    if (overlap) {
      if (o < 5) {
        o++;
      } else {
        ele[0].style.visibility = "hidden";
        ele[1].innerHTML = out.innerHTML;
        ele[2].style.visibility = "hidden";
      }
    }
    await new Promise((r) => setTimeout(r, 50));
  }
}

function resetDefault() {
  let ele = [...document.getElementsByClassName("operand")];
  ele[0].style.visibility = "visible";
  ele[2].style.visibility = "visible";
  ele.forEach((e) => {e.style.transform = "";});
  ele[0].innerHTML = "Principal";
  ele[1].innerHTML = "Rate=7";
  ele[2].innerHTML = "Time=10";
}

async function submitVariable() {
  let val = document.getElementById("variable-arguments").value.split(",");
  let ele = [...document.getElementsByClassName("operand")];
  let out = document.getElementById("output-variable");
  if (val.length == 0) {
    out.innerHTML = "Please enter at least 1 argument";
    out.classList.add("wrong");
    return;
  }
  for (let i = 0; i < val.length; i++) {
    if (!isNumeric(val[i])) {
      out.innerHTML =
      "All inputs should be numeric otherwise TypeError will be thrown";
      out.classList.add("wrong");
      return;
    }else{
      val[i] = parseFloat(val[i]);
    }
  }
  out.classList.remove("wrong");
  ele.forEach(e => {e.remove()});
  
  document.getElementById("variable-function").style.minHeight = 3.4 * val.length + "rem";
  
  sum = 0;
  for (let i = 0; i < val.length; i++) {
    let newEle = document.createElement("div");
    newEle.classList.add("operand");
    newEle.innerHTML = val[i];
    document.getElementById("var-container").appendChild(newEle);
    sum += val[i];
  }
  out.innerHTML = sum;

  anime({
    targets: ".operand",
    translateX:
      document.getElementById("var-container").clientWidth -
      100 +
      "px",
    duration: 2000,
    easing: "linear",
    direction: "normal",
  });
  ele = [...document.getElementsByClassName("operand")];
  let o = 0;
  let func = document.getElementById("variable-function");
  let rect = func.getBoundingClientRect();
  while (true) {
    let overlap = false;
    ele.forEach(e => overlap |= checkCollision(e.getBoundingClientRect(), rect));
    if (overlap) {
      if (o < 3) {
        o++;
      } else {
        ele.forEach((e, i) => {
          if(i != 0)
            e.style.visibility = "hidden"
        });
        ele[0].innerHTML = out.innerHTML;
      }
    }
    await new Promise((r) => setTimeout(r, 75));
  }
}

function resetVariable() {
  document.getElementById("variable-function").style.minHeight = "2rem";
  let ele = [...document.getElementsByClassName("operand")];
  ele.forEach(e => {e.remove()});
  let newEle = document.createElement("div");
  newEle.classList.add("operand");
  newEle.innerHTML = "1";
  document.getElementById("var-container").appendChild(newEle)
}