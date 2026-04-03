const ul = document.querySelector("ul#categories");

const li = ul.children;

console.log(`Number of categories: ${li.length}`);

for (const item of li) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
