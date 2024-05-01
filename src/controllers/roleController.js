import {Role} from "../models/models.js";

const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll()
    return res.json(roles)
  } catch (err) {
    throw new Error(err)
  }
}

const getOneRole = async(req, res)=> {
  try {

  } catch (err) {
    throw new Error(err)
  }
}

const createRole = async (req, res) => {
  try {
    const {name} = req.body
    const newRole = await Role.create({name})
    return res.json (newRole)
  } catch (err) {
    throw new Error(err)
  }
}

const updateRole = async (req, res) => {
  try {

  } catch (err) {
    throw new Error(err)
  }
}

const deleteRole = async (req, res) => {
  try {

  } catch (err) {
    throw new Error(err)
  }
}

export default {
  getAllRoles,
  getOneRole,
  createRole,
  updateRole,
  deleteRole
}