'use strict';
module.exports = class SessionLoginUser {
    constructor() {
        this.loginId = '';
        this.password = '';
        this.userName = '';
        this.userAuth = '';
        this.userId = '';
    }

    setLoginId(loginId) {
        this.loginId = loginId;
    }

    setPassword(password) {
        this.password = password;
    }

    setUserName(userName) {
        this.userName = userName;
    }

    setUserAuth(userAuth) {
        this.userAuth = userAuth;
    }

    setUserId(userId) {
        this.userId = userId;
    }
}