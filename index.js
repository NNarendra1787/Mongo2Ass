const express = require('express')
const Client = require('./db/connection')
const route = require('./Routes/routes')
const app = express()
const port = 3000
app.use(express.json())


async function dbconnect(){
    try{
        await Client.connect();
        console.log("connected to Database");
    }
    catch(err){
        console.log("error", err);
    }
}
dbconnect()
app.use("/api", route)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))