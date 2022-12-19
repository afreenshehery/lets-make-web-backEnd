const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");
// sequelize.sync({ force: true })
const Auth = sequelize.define("auth", {
      id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
      },
      userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
      },


      token: {
            type: Sequelize.STRING,

      },
      status: {
            type: Sequelize.INTEGER,
            allowNull: false,
      },


},
      {
            timestamps: false,
            freezeTableName: true
      });

module.exports = Auth;