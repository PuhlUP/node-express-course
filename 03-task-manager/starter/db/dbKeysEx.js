const dbLogin = {
    dbName: "DatabaseName",
    user: 'userName',
    key: 'keyPass',
    server: 'server'
};

const connectionsString = `mongodb+srv://${dbLogin.user}:${dbLogin.key}@nodeexpressproject.x5jedqa.mongodb.net/${dbLogin.dbName}?retryWrites=true&w=majority`;

module.exports = {
    dbLogin, 
    connectionsString,
}