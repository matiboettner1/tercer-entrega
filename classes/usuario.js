class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
        this.isLoged = false;
    }

    toString = () => {
        return this.userName;
    }

    isPassword = (password = '') => {
        return this.password === password;
    }
}