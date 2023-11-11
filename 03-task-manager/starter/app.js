console.log('Task Manager App')

const express = require('express');
const app =  express();
const tasks = require('./routes/tasks')

// midleware
app.use(express.json())


// routes 
app.get('/hello', (req,res) => {
    res.send('Task Manager App')
}) 

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')  // get all the tasks

const port = 3000;
app.listen(port, console.log(`Server is listening on port ${port}... `))
 