const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")
const { check, validationResult } = require('express-validator');
const SessionLoginUser = require("./sessionLoginUser");
const DataBase = require("../db/database");

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
    // check('loginId')
    //     .isEmpty().withMessage('ログインIDの入力は必須です'),
    // check('password')
    //     .isEmpty().withMessage('パスワードの入力は必須です')
], function (req, res, next) {

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
        // ログイン処理を記載
        // ログインユーザ情報を検索
        const dataBase = new DataBase();
        let loginUserData;
        dataBase.executeSql("SELECT * FROM LOGIN_USER_DATA WHERE LOGIN_ID = '" + req.body.loginId + "'", loginUserData);
        console.log("entity=" + loginUserData)

        // 入力値とログインユーザ情報を比較する

        // セッションにSessionLoginUserを設定する
        let sessionLoginUser = new SessionLoginUser();
        sessionLoginUser.setLoginId(req.body.loginId);
        sessionLoginUser.setPassword(req.body.password);
        sessionLoginUser.setUserName(loginUserData.USER_NAME);
        sessionLoginUser.setUserAuth(loginUserData.USER_AUTH);
        sessionLoginUser.setUserId(loginUserData.USER_ID);
        req.session.sessionLoginUser = sessionLoginUser;
        res.render('login/top', {
            sessionLoginUser: sessionLoginUser
        });
    }
});


module.exports = router;