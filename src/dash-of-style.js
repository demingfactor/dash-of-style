import '../node_modules/code-prettify/loader/prettify.css';
import {escape, unescape} from 'html-escaper';
const Prettify = require('code-prettify');
const Urlify = require('urlify').create();
const Clipboard = require('clipboard');
new Clipboard('.clipboard');

console.log("You've added a dash of style!");

// Generate TABLE OF CONTENTS
//
// Find element with id of "toc" and autogenerate
// a Table of Contents there using h1 elements on the page.

const tableOfContents = document.getElementById("toc");
if(tableOfContents != null && tableOfContents !== undefined){
    const menuList = document.createElement('ul');
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
        menuList.insertAdjacentElement("beforeend", menuItem);

        const address = document.createElement('a');
        address.setAttribute("href", "#" + urlId);
        address.innerHTML = heading.innerText;
        menuItem.insertAdjacentElement("beforeend", address);
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
    element.innerHTML = escape(codeExample.outerHTML);
    element.classList.add("prettyprint");
    example.insertAdjacentElement("afterend", element);

    let copyButton = document.createElement('button');
    copyButton.innerHTML = 'copy';
    copyButton.setAttribute("class", 'clipboard');
    copyButton.setAttribute("data-clipboard-text", example.outerHTML);

    element.insertAdjacentElement("afterbegin", copyButton);
  }
}

Prettify.prettyPrint();