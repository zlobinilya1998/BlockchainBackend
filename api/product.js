import express from "express";

const router = express.Router();

router.get('/', async (req,res)=>{
    res.send({
        id:105,
        name:'Boots'
    })
})
export default router
