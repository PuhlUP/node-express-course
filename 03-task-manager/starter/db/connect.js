const mongoose = require('mongoose')
const dbLogin = require('./dbKeys')


const connectionsString = `mongodb+srv://${dbLogin.user}:${dbLogin.key}@nodeexpressproject.x5jedqa.mongodb.net/${dbLogin.dbName}?retryWrites=true&w=majority`;

// warning: don't log the pass
// console.log(`URL db connecting: ${connectionsString} `);

mongoose
.connect(connectionsString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(() => console.log(`Connected to the DataBase Atlas Mongoose => ${dbLogin.dbName}`))
.catch((err) => console.log(err));