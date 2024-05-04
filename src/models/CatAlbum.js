import dbKotolog from "../database.js"
import {DataTypes} from "sequelize"

export const CatAlbum = dbKotolog.define('album',{
  catId: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  photos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    allowNull: true
  }
})