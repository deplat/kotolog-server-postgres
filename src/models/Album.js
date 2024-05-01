import dbCats from "../database.js"
import {DataTypes} from "sequelize"

export const Album = dbCats.define('album',{
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    allowNull: false,
    primaryKey: true
  },
  photos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  }
})