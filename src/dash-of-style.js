console.log("You've added a dash of style!");
const EscapeHtml = require('escape-html');
const Urlify = require('urlify').create();

const Prettify = require('code-prettify');
Prettify.prettyPrint();

const Clipboard = require('clipboard');
new Clipboard('.clipboard');

// Generate TABLE OF CONTENTS
//
// Find element with id of "toc" and autogenerate
// a Table of Contents there using h1 elements on the page.

const tableOfContents = document.getElementById("toc");
if(tableOfContents != null && tableOfContents !== undefined){
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
}

// Generate Code 'Example' sections
//
// Finds elements labelled with class="example" and
// then inserts a code example for that element
// which also includes it's own copy button.

let examples = document.getElementsByClassName("example");

if (examples.length != 0) {
  for (let e = 0; e < examples.length; e++) {
    let element = document.createElement('code');
    const example = examples[e];
    let codeExample = example;
    // codeExample.classList.remove("example");
    // if (codeExample.classList.length === 0) {
    //   codeExample.removeAttribute("class")
    // }
    element.classList.add("prettyprint");
    element.classList.add("db", "mt2", "mb4", 'pt3', "pa3", "bg-rb-grey30", "f7");
    element.innerHTML = EscapeHtml(codeExample.outerHTML);
    element.classList.add("prettyprint");
    example.insertAdjacentElement("afterend", element);

    let copyButton = document.createElement('button');
    copyButton.innerHTML = 'copy';
    copyButton.setAttribute("class", 'clipboard');
    copyButton.classList.add('relative', 'left-28', 'db', 'top-2', 'bg-transparent', 'gray', 'bn', 'f7', 'anon-pro', 'rb-white-hover',
      'rb-purple-focus', 'bg-rb-purple-hover');
    copyButton.setAttribute("data-clipboard-text", example.outerHTML);

    example.insertAdjacentElement("afterend", copyButton);
  }
}

