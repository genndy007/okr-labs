let list = document.querySelector(".list");

list.onmouseover = function (e) {
  if (e.target.tagName === "LI") {
    e.target.style.background = "#a8b";
  }
  if (e.relatedTarget.tagName && e.relatedTarget.tagName === "LI") {
    e.relatedTarget.style.background = "#f1a";
  }
};
// list.onmouseout = function(e) {
//   if (e.target.tagName === "LI") {
//     e.target.style.background = "#ececec";
//   }
//   if (e.relatedTarget.tagName && e.relatedTarget.tagName === "LI") {
//     e.relatedTarget.style.background = "#dd0000";
//   }
// };

let selected = null;
let x_pos = 0;
let y_pos = 0;
let x_elem = 0;
let y_elem = 0;

const drag = (elem) => {
  selected = elem;
  x_elem = x_pos - selected.offsetLeft;
  y_elem = y_pos - selected.offsetTop;
};

const move = (e) => {
  x_pos = window.event.clientX;
  y_pos = window.event.clientY;
  if (selected !== null) {
    selected.style.left = x_pos - x_elem + "px";
    selected.style.top = y_pos - y_elem + "px";
  }
};

const destroy = () => {
  selected = null;
};

document.querySelector(".move").onmousedown = function () {
  drag(this);
  return false;
};

document.onmousemove = move;
document.onmouseup = destroy;
