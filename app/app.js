(function () {
    'use strict';

    window.app = {
        Car: function (model, year) {
            this.model = model;
            this.year = year;
        },
        carPortal: function () {
            this.credentials = {};
            this.login = function (username, password) {
                if (username === 'xyz' || password.length < 3 ) {
                    this.logout();
                    return false;
                } else {
                    this.credentials.username = username;
                    this.credentials.password = password;
                }
            };
            this.logout = function () {
                this.credentials = {};
            };
        }
    };
})();
