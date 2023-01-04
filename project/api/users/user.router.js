const{createUser}=require("./uaer.controller");
const router=require=require("express").Router();

router.post("/",createUser);

module.exports=router;