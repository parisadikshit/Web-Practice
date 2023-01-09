import express from 'express';
import { constant } from '../utils/constant';
const router = express.Router();

router.get(constant.FETCH_USER, (req,res)=>{
    res.send('you win')
})

module.exports = router;