const {MongoClient} = require('mongodb')

const uri = "mongodb+srv://narendranarwade2002:Handson2Pass@handson2.mxr6ebk.mongodb.net/?retryWrites=true&w=majority"

const Client = new MongoClient(uri, {useNewUrlParser: true})

module.exports = Client