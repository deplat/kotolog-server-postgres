import dbKotolog from "../database.js"
import {DataTypes} from "sequelize"

export const Role = dbKotolog.define('role', {
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