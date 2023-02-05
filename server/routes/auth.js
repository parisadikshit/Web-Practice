import express from 'express';
import { constant } from '../utils/constant';
const router = express.Router();
// import controllers
import {register, login, logout} from '../controllers/auth'
router.post(constant.LOGIN_USER, login)
router.get(constant.LOGOUT_USER,logout)
router.post(constant.FETCH_USER, register)


module.exports = router;