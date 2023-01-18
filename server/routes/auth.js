import express from 'express';
import { constant } from '../utils/constant';
const router = express.Router();
// import controllers
import {register} from '../controllers/auth'
router.post(constant.FETCH_USER, register)

module.exports = router;