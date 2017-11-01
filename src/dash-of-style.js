console.log("You've added a dash of style!");
const Urlify = require('urlify').create();

const tableOfContents = document.getElementById("toc");
tableOfContents.classList.add("flex", "justify-center");
const menuList = document.createElement('ul');
menuList.classList.add("m0");
tableOfContents.insertAdjacentElement("beforeend", menuList);
const headings = document.querySelectorAll("h1");
if (headings.length != 0) {
  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    if (heading.classList.contains("example")) {
      continue;
    }
    const urlId = Urlify(heading.innerText);
    heading.setAttribute("id", urlId)

    const menuItem = document.createElement('li');
    menuItem.classList.add("list")
    menuList.insertAdjacentElement("beforeend", menuItem);

    const address = document.createElement('a');
    address.setAttribute("href", "#" + urlId);
    address.innerHTML = heading.innerText;
    menuItem.insertAdjacentElement("beforeend", address);
    address.classList.add("anon-pro", "no-underline", "rb-red", "b", "grow:hover");
  };
}
