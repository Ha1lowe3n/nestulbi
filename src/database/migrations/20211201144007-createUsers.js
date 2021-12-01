'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                unique: true,
                primaryKey: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            banned: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            banReason: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    },
};
