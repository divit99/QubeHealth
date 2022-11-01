const express=require("express")
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const port = 8001;

const db=require("./db/conn")
const router=require("./Routes/router")

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port,()=>{
    console.log("server starts at port no :" + port);
})