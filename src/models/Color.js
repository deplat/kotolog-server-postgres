import dbCats from "../database.js"
import {DataTypes} from "sequelize";

export const Color = dbCats.define('color', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  }
})
