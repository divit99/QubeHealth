const express=require("express")
const router=new express.Router()
const db = require("../db/conn")
const multer = require("multer");
const moment = require("moment")
// router.post("/create",(req,res)=>{
//     console.log(req.body);
// })
var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
});


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(null,Error("only image is allowd"))
    }
}

var upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})

router.post("/register/:id",upload.single("photo"),(req,res)=>{
    //console.log(req);
    const {id} = req.params;
    const {fname} = req.body;
    const {filename} = req.file;
    //const {mobile} = req.params.id;

  
    if(!fname || !filename){
        res.status(422).json({status:422,message:"fill all the details"})
    }
    
    try {
        
        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        
        db.query("INSERT INTO UserFiles SET ?",{imgname:fname,Userimg:filename,date:date,UserMobile:id},(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log("data added")
                res.status(201).json({status:201,data:req.body})
            }
        })
    } catch (error) {
        res.status(422).json({status:422,error})
    }
});

router.get("/getdata/:id",(req,res)=>{
    try {
        const {id} = req.params;
        db.query("SELECT * FROM UserFiles WHERE UserFiles.UserMobile = ?;",id,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log("data get")
                res.status(201).json({status:201,data:result})
            }
        })
    } catch (error) {
        res.status(422).json({status:422,error})
    }
});
router.delete("/:id",(req,res)=>{
    const {id} = req.params;
   try {
    db.query(`DELETE FROM UserFiles WHERE id ='${id}'`,(err,result)=>{
        if(err){
            console.log("error")
        }else{
            console.log("data delete")
            res.status(201).json({status:201,data:result})
        }
    })
   } catch (error) {
    res.status(422).json({status:422,error})
   }
})


router.post("/create", (req, res) => {

    // console.log(req.body);

    const { name, mobile } = req.body;

    if (!name || !mobile ) {
        res.status(422).json("plz fill the all data");
    }

    try {
        db.query("SELECT * FROM data WHERE mobile = ?", mobile, (err, result) => {
            if (result.length) {
                res.status(422).json("This Data is Already Exist")
            } else {
                db.query("INSERT INTO data SET ?", { name, mobile }, (err, result) => {
                    if (err) {
                        console.log("err" + err);
                    } else {
                        res.status(201).json(req.body);
                    }
                })
            }
        })
    } catch (error) {
        res.status(422).json(error);
    }

});

router.get("/getusers",(req,res)=>{

    db.query("SELECT * FROM data",(err,result)=>{
        if(err){
            res.status(422).json("nodata available");
        }else{
            res.status(201).json(result);
        }
    })
});

router.get("/checkdata/:id",(req,res)=>{
    const {id} = req.params;
    console.log(id);
    db.query("SELECT * FROM data WHERE data.mobile = ?;",id,(err,result)=>{
        console.log(result.length)
        if(result.length==0){
            console.log("err")
            res.status(422).json("nodata available");
        }else{
            //console.log()
            console.log("correct")
            res.status(201).json(result);
        }
    })
});
// user delete api
router.delete("/deleteuser/:id",(req,res)=>{

    const {id} = req.params;

    db.query("DELETE FROM data WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});
// get single user
router.get("/induser/:id",(req,res)=>{

    const {id} = req.params;

    db.query("SELECT * FROM data WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});
// update users api
router.patch("/updateuser/:id",(req,res)=>{

    const {id} = req.params;

    const data = req.body;

    db.query("UPDATE data SET ? WHERE id = ? ",[data,id],(err,result)=>{
        if(err){
            res.status(422).json({message:"error"});
        }else{
            res.status(201).json(result);
        }
    })
});

module.exports=router;