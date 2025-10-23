# 04_express_33752058

A basic Express.js app for coursework.

## Overview

This project is a small Express server built with CommonJS. It’s designed to show how to set up and organize simple routes in an Express app.

## Installation

Open PowerShell in the project folder and run:

```bash
npm install
```

## Running the App

Start the server with:

```bash
node index.js
```

Or add this to your `package.json` to use `npm start`:

```json
"scripts": {
  "start": "node index.js"
}
```

Then run:

```bash
npm start
```

## Main Files

* **index.js** — starts the Express server
* **routes/main.js** — contains the route handlers
* **a.html** — example HTML file
* **links.txt** — extra notes or links

## Routes

The routes are defined in `routes/main.js` and used in `index.js`.
Includes the root route (`/`) and any others you add.

## Notes

* Uses **CommonJS** modules
* Depends on **Express**