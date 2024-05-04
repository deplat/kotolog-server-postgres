import dbKotolog from "../database.js"
import {DataTypes} from "sequelize";

export const CatInfo = dbKotolog.define('info', {
  catId: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  info: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})