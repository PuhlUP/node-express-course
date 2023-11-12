console.log('Task Manager App')

const express = require('express');
const app =  express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const {
    dbLogin, 
    connectionsString,
} = require('./db/dbKeys')

// midleware
app.use(express.json())


// routes 
// http://localhost:3000/hello

app.get('/hello', (req,res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')  // get all the tasks

const port = 3000;

const start = async() => {
    try {
        // warning: don't log the pass
        // console.log(`URL db connecting: ${connectionsString} `);
        await connectDB(connectionsString)
        app.listen(port, console.log(`Server is listening on port ${port}... `))
        console.log(`Connected to the DataBase Atlas Mongoose => ${dbLogin.dbName}`)
    } catch (error) {
        console.log(error);
    }
}


start()