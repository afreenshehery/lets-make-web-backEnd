const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");
// sequelize.sync({ force: true })
const signUp = sequelize.define("signUp", {
      id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
      },

      Name: {
            type: Sequelize.STRING,
            allowNull: false,
      },
      LastName: {
            type: Sequelize.STRING,
            allowNull: false,
      },


      Email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true

      },
      Password: {
            type: Sequelize.STRING,
            allowNull: false,

      },





},
      {
            timestamps: false,
            freezeTableName: true
      });

module.exports = signUp;