const auth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        cb();
    },
    signout(cb) {
        this.isAuthenticated = false;
        cb();
    }
};

module.exports = auth;