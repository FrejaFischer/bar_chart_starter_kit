const list = document.querySelector("ul");
const waitArray = [];
let count = 999;

const startInterval = setInterval(createBlock, 1000);
const spaceInterval = setInterval(() => {
  document.querySelector(".space_no").textContent = count;
  count--;
}, 3000);

function createBlock() {
  const li = document.createElement("li");

  let number = Math.floor(Math.random() * 100) + 1;
  li.style.setProperty("--height", number);

  waitArray.push(li);
  //   console.log(waitArray);

  list.appendChild(li);

  //   console.log(list.children.length);

  if (waitArray.length === 21) {
    console.log("*********");
    waitArray.shift();
    list.firstElementChild.remove();
  }
}
