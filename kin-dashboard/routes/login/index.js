const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")
const { check, validationResult } = require('express-validator');

/** 
 * ログイン画面表示
 * @param リクエストURL
 * @param function (req, res) ログイン要求処理
 */
router.get('/index', function (req, res) {
    let view = {
        // ログインformを初期化
        form: {
            loginId: '',
            password: ''
        }
    };
    res.render('login/index', view);
});

/** 
 * ログイン処理
 * @param リクエストURL
 * @param Validate[] 妥当性チェック情報の配列
 * @param function (req, res) ログイン要求処理
 */
router.post('/top', [
    check('loginId')
        .isEmpty().withMessage('ログインIDの入力は必須です'),
    check('password')
        .isEmpty().withMessage('パスワードの入力は必須です')
], function (req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // 妥当性チェックエラーが発生した場合
        console.log("妥当性チェックエラーが発生しました");
        const errorArray = errors.array();
        console.log(errorArray.length);
        for (var i = 0; i < errorArray.length; i++) {
            console.log("エラーメッセージ=" + errorArray[i].msg);
        }
        let view = {
            form: {
                loginId: req.body.loginId,
                password: req.body.password,
                errorMessage: errorArray[0].msg
            }
        };
        res.render('login/index', view);
    } else {
        res.render('login/top', {});
    }
});



module.exports = router;