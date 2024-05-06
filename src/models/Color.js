import dbKotolog from "../database.js"
import {DataTypes} from "sequelize";

export const Color = dbKotolog.define('color', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
})
