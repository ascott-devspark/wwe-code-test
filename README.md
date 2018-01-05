# WWE Code Test

Clone this repo and get ready to start working with Gulp and Sass to dynamical projects.

Gulp is a Javascript task runner. As they mention on [their website](https://gulpjs.com/), gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something

> **Task:** An automated command. You can create your own or choose from around 4,000 Grunt plugins to concatenate, minify, compile, etc.

This starter kit will allow you to:

1. Compile Sass into CSS
2. Compress JavaScript and CSS files

by running one simple set of commands from the terminal.

## How it works

The are a couple of things you need to install beforehand:

* **Node:** a JavaScript runtime
* **npm:** Node Package Manager
* **Gulp-CLI:** command-line interface to run Gulp
* **Gulp:** the actual task runner

Next, clone the repo and start working on your project inside this folder:

`git clone https://github.com/ascott-devspark/wwe-code-test`

After clone the repo you should install the dependencies with:

`npm install`

Watch for changes and compile Sass:

`npm run server`

And when you're ready, build for deploy (minifying CSS and JS):

`npm run deploy`

Gulp is going to compile, minify and output the files inside the folders `/src/css` and `/src/js`.
