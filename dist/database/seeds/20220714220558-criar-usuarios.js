"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
    up: async(queryInterface) => queryInterface.bulkInsert('users', [{
        nome: 'yuri',
        email: 'yuricinco@gmai.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        nome: 'yuri2',
        email: 'yuricinco2@gmai.com',
        password_hash: await bcryptjs.hash('54321', 8),
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        nome: 'yuri3',
        email: 'yuricinco3@gmai.com',
        password_hash: await bcryptjs.hash('434343', 8),
        created_at: new Date(),
        updated_at: new Date(),
    }], {}),

    down() {

    },
};
