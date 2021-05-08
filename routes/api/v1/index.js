var express = require('express');
const userRouter = require('./users');
const userProfRouter = require('./prof_users');
const router = express.Router();

router.use('/', userRouter);
router.use('/', userProfRouter);

module.exports = router;
