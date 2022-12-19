const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");
// sequelize.sync({ force: true })
const project = sequelize.define("project", {
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

      website: {
            type: Sequelize.STRING,
            allowNull: false,
      },
      slote: {
            type: Sequelize.STRING,
            allowNull: false,
      },


      discription: {
            type: Sequelize.STRING,
            allowNull: true,


      },







},
      {
            timestamps: false,
            freezeTableName: true
      });

module.exports = project;