const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const list = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    list.push(div);
    size += 10;
  }

  refs.boxes.replaceChildren(...list);
}

refs.createBtn.addEventListener("click", () => {
  const amount = refs.input.value;

  if ((amount >= 1) & (amount <= 100)) {
    createBoxes(amount);
  }
});

refs.destroyBtn.addEventListener("click", () => {
  refs.boxes.innerHTML = "";
});
