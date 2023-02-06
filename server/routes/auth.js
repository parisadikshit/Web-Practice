import express from 'express';
import { constant } from '../utils/constant';
const router = express.Router();
// import controllers
import {register, login, logout, currentUser} from '../controllers/auth'
// import middleware
import {requireSignIn} from '../middleware/index';
router.post(constant.LOGIN_USER, login)
router.get(constant.LOGOUT_USER,logout)
router.post(constant.FETCH_USER, register)
router.get(constant.FETCH_CURRENT_USER, requireSignIn, currentUser )


module.exports = router;