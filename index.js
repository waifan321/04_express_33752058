// Set up express
const express = require("express");
const app = express();
const port = 8000; 

/// Route handlers

const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);


/// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Server is running on http://localhost:${port}`));
