

const app = require('./app');


app.listen(process.env.PORT,()=>{
    console.log(`The server running at localhost:${process.env.PORT}`)
})