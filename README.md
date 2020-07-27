Dash of Style
=============

Everyone can use a dash of style.

Dash of Style provides a very simple way to create a style guide for your site or app. Also commonly known as a living styleguide as the style on the page reflects the actual code being used to style elements across the site.

Check out [dash-of-style-example](//github.com/demingfactor/dash-of-style-example) for our example implementation out of the box.

Installation
============

The best way to include the dash-of-style is via npm.

1.    npm add dash-of-style  # Add library to package.json

2.    npm install --only=production  # Package now available in node_modules/dash-of-style

3.    On your styleguide html page include our style scaffold to get you started.

    <link rel="stylesheet" href="node_modules/dash-of-style/scaffold.css">

Getting started
===============

1. Create a page to be your styleguide we suggest /styleguide.html, being the common convention.

2. Add example elements to the page:

   <h2 class="example">Heading 2</h2>

3. Add dash-of-style code to your page.

4. Check the web console and it should tell you "You've added a dash of style"

Deploying package updates to NPM registry
=========================================

Major 1.0.0 -> 2.0.0
Minor 1.1.0 -> 1.2.0
Patch 1.0.1 -> 1.0.2

1. Commit your changes to git

2. npm build  # to create a new dist/dash-of-style.js

2. npm version patch|minor|major  # select one  

3. npm publish