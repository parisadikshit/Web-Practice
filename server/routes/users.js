import express from 'express';
import { constant } from '../utils/constant';
const router = express.Router();
// import controllers
import {users} from '../controllers/users';

router.get(constant.FETCH_USER, users)

module.exports = router;