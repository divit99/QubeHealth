const mysql=require("mysql2")


const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Abcd@1234",
   database:"users"

})
module.exports=db;