import {User} from "../models/User.js";
import {Role} from "../models/Role.js";

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
    const  { email, pasasword, role} = req.body
    const userRole = await Role.findOne({where: {name: role}})

    //const newUser = await User.create({email, password}, {include: [Role]})
    return res.json(userRole)
  } catch (err) {
    throw new Error(err)
  }

}
const updateUser = async (req, res) => {

}

const deleteUser = async (req, res) => {

}

export default {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}