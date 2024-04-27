import dbCats from "../database.js"
import {DataTypes} from "sequelize";

export const CatInfo = dbCats.define('cat_info', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  info: {
    type: DataTypes.TEXT,
    allowNull: true
  }
})