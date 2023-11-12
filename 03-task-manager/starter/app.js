console.log('Task Manager App')

const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

require('dotenv').config()

// midleware
app.use(express.static('./public'))
app.use(express.json())


// routes 
// http://localhost:3000/hello

// test for hello only on page
// app.get('/hello', (req, res) => {
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')  // get all the tasks

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}... `))
        console.log('Connected to the DataBase Atlas Mongoose')
    } catch (error) {
        console.log(error);
    }
}


start()