"use strict";module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn(
            'alunos',
            'email',

            {
                type: Sequelize.STRING,
                alloNull: false,
                unique: true,
            },
        );
    },

    // eslint-disable-next-line no-empty-function
    async down() {},
};
