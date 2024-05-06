import dbKotolog from "../database.js"
import {DataTypes} from "sequelize";

export const CatInfo = dbKotolog.define('cat_info', {
  catId: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  info: {
    type: DataTypes.TEXT,
    defaultValue: ''
  }
})