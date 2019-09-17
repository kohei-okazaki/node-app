const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

/** 
 * ログイン画面表示 
 */
router.get('/index', function (req, res, next) {
    console.log("あいうえお");
    let view = {
        form: {
            loginId: '',
            password: ''
        }
    };
    res.render('login/index', view);
});

/** 
 * ログイン処理
 */
router.post('/top', [
    check('loginId').isEmpty(), 
    check('password').isEmpty()
], function (req, res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // 妥当性チェックエラーが発生した場合
        console.log("妥当性チェックエラーが発生しました");
    };
    let view = {
        form: {
            loginId: '',
            password: ''
        }
    };
    res.render('login/top', view);
});



module.exports = router;