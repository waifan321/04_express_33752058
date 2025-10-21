// Set up express
const express = require("express");
const app = express();
const port = 8000; 

/// Route handlers


// Home route
app.get("/", (req, res) => res.send("Hello World!")); 

// About route using https://localhost:8000/about  
app.get('/about', (req, res) => res.send ('<h1>This is about page</h1>'))

// Contact route using https://localhost:8000/contact
app.get('/contact', (req, res) => res.send ('<h1>This is contact page</h1>'))

// Date route using https://localhost:8000/date
app.get('/date', (req, res) => {
    const currentDate = new Date();
    res.send(`<h1>Current Date and Time: ${currentDate}</h1>`);
});



/// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Server is running on http://localhost:${port}`));
