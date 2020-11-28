import AV, { Query, User } from 'leancloud-storage';

AV.init({
    appId: "U4yNiJ9kmIWKHEes1tVK9bM5-gzGzoHsz",
    appKey: "sSPreiDEq0acnA0kBrjy2q0n",
    serverURL: "https://u4ynij9k.lc-cn-n1-shared.com"
});

const Auth = {
    register(username, password) {
        let user = new User();
        user.setUsername(username);
        user.setPassword(password);

        return new Promise((resolve, reject) => {
            user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
        })
    },
    login(username, password) {
        return new Promise((resolve, reject) => {
            User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error))
        })
    },
    logout() {
        User.logOut();
    },
    getCurrentUser() {
        return User.current();
    }

}

export { Auth };
