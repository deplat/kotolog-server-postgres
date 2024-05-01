import {User} from "../models/models.js";
import {Role} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.json(users)
  } catch (err) {
    throw new Error(err)
  }
}

const getUser = async (req, res) => {

}

const createUser = async (req, res) => {
  try {
    const {email, password, roleId} = req.body
    const userRole = await Role.findOne({where: {id: roleId}})
    const newUser = await User.create({
      email,
      password
    })
    await newUser.addRole(userRole, {through: 'user_roles'})
    await newUser.save()

    return res.json(newUser.email)
  } catch (err) {
    throw new Error(err)
  }

}
const updateUser = async (req, res) => {

}

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id
    const userToDelete = await User.findByPk(id)
    await userToDelete.destroy()
    return res.json({message: 'User deleted successfully'})
  } catch (err) {
    next(ApiError.internal(err.message))
  }
}

export default {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}