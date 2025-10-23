// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

// Home route
router.get("/", (req, res) => res.send("Hello World!")); 

// About route
router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

// Contact route
router.get("/contact", (req, res) => res.send ("<h1>This is the contact page</h1>"));

// Date route
router.get("/date", (req, res) => {
    const currentDate = new Date();
    res.send(`<h1>Current Date and Time: ${currentDate}</h1>`);
});

// Welcome route with parameter
router.get("/welcome/:name", (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello, ${name}</h1>`);
});


/// Chain route

// First handler
router.get('/chain', (req, res, next) => {
  req.message = 'Hello from the first handler! ';
  next();
});

// Second handler
router.get('/chain', (req, res) => {
  res.send(req.message + 'And this is the second handler.');
});

// Serving an HTML file
const path = require('path');

router.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname, 'a.html'));
});

// Exporting the router object so index.js can access it
module.exports = router;