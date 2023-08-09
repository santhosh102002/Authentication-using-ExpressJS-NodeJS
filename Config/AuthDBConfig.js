const mongoose = require('mongoose');
require('dotenv').config()

const dbConnect = async ()=>{
     mongoose.connect(process.env.MONGO_URL)
     .then((conn)=>{
        console.log(`The mongodb connection is established at ${conn.connection.host}`)
     })
     .catch((err)=>{
        console.log(`The error occured in connection to mongodb ${err}`)
     })
}

module.exports = dbConnect