class UserTemplate {
    constructor(name, password, age, date) {
        this.name = name;
        this.password = password;
        this.age = age;
        this.connected = false;
        this.date = date;
    }

    login() {
        this.connected = true;
        console.log("your login status :", this.connected);
    }

    logout() {
        this.connected = false;
        console.log("your login status :", this.connected);
    }

    checkStatus() {
        console.log("your login status :", this.connected);
    }
}