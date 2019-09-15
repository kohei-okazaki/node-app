const express = require('express');
const router = express.Router();

/** 
 * ログイン画面表示 
 */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'ログイン画面' });
});

/** 
 * ログイン処理
 */
router.post('/', function (req, res, next) {
    res.render('index', { title: 'ログイン画面' });
});



module.exports = router;