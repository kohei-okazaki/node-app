const express = require('express');
const router = express.Router();

/** 
 * ログイン画面表示 
 */
router.get('/index', function (req, res, next) {
    res.render('login/index', {title: 'ログイン画面' });
});

/** 
 * ログイン処理
 */
router.post('/top', function (req, res, next) {
    res.render('login/top', { title: 'TOP画面' });
});



module.exports = router;