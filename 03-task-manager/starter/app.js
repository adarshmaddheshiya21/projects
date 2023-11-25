const express = require('express');
const app = express();

// routes
app.get('/hellow', (req, res)=> {
    res.send('Task Manager App');
})

app.listen(3000, ()=> {
    console.log("The server is running on port 3000...");
})