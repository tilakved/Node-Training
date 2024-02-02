const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

app.use(express.json());
app.use(indexRouter);


app.listen(3000,()=>{
    console.log("Server is listening on port: 3000")
})