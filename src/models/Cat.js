import dbCats from "../database.js"
import {DataTypes} from "sequelize"

export const Cat = dbCats.define('cat', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sex: {
    type: DataTypes.ENUM('f', 'm')
  },
  age: { // Возраст указываем в месяцах и выводим целое от деления на 12, когда возраст больше 12 мес.
    type: DataTypes.INTEGER,
    allowNull: true
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  }
})