// Використати наступні властивості DOM-вузла:
// innerHTML, outerHTML, nodeValue / data, textContent
// Внести зміни в документи/сторінку, використовуючи
//  document.write, document.createElement(tag),
//  document.createTextNode(text) та методи вставки
//  node.append (... nodes or strings), node.prepend (... nodes or strings),
//   node.after (... nodes or strings), node.replaceWith (... nodes or strings),
//   метод видалення вузлів node.remove ().

const changeBackgroundColor = (color, time = 30) => {
  const currentColor = document.body.style.background;
  document.body.style.background = color;

  setTimeout(
    () => (document.body.style.background = currentColor),
    time * 1000
  );
};

const redirectLocation = (url = "http://stackoverflow.com") => {
  window.location.href = url;
};

const randomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const paintHeader = () => {
  const header = document.getElementById("header");
  header.style.color = randomColor();
};

const paintLinks = () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => (link.style.color = randomColor()));
};

const changeHtmlContent = () => {
  const paras = document.getElementsByClassName("link");
  for (let i = 0; i < paras.length; i++) {
    paras[i].innerHTML += ` link ${i}`;
    paras[i].textContent += ` link ${i}`;
  }
};

const addSomeChangesToDocument = () => {
  let div = document.createElement("div");
  div.innerHTML = "<p>Hello div!</p> <p> Some paragraph </p> ";
  let textNode = document.createTextNode("New text node");

  document.body.append(div);
  div.append(textNode);
  // div.prepend(textNode);
  div.before("before content");
  div.after("after content");

  textNode.replaceWith("replaced node");
};
