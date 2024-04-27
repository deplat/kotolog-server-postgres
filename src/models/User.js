import dbCats from "../database.js"
import {DataTypes} from "sequelize"
import bcrypt from "bcryptjs"

const saltRounds = 10

export const User = dbCats.define('user', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.VIRTUAL,
    allowNull: false
  },
  passwordHash: {
    type: DataTypes.STRING
  }
})

User.beforeCreate(async (user, options) => {
  try {
    user.passwordHash = await bcrypt.hash(user.password, saltRounds)
  } catch (err) {
    throw new Error(err)
  }
})
/**
User.beforeUpdate((user) => {
  if (user.changed('password')) {
    return bcrypt.hash(user.password, saltRounds)
      .then(hash => {
        user.password = hash
      })
      .catch(err => {
        throw new Error(err)
      })
  }
})
*/