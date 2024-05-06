import dbKotolog from "../database.js"
import {DataTypes} from "sequelize"

export const CatAlbum = dbKotolog.define('cat_album',{
  catId: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  photos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: []
  }
})