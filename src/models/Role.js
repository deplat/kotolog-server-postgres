import dbCats from "../database.js"
import {DataTypes} from "sequelize"

export const Role = dbCats.define('role', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})