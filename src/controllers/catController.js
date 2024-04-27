import {Cat} from "../models/Cat.js";
import {ApiError} from "../error/ApiError.js";

const getAllCats = async (req, res) => {

}
const getCat = async (req, res) => {
}
const createCat = async (req, res, next) => {
  try {
    const {name, sex, age, colors, info} = req.body
    if (req.files) {
      const {avatar, photos} = req.files
    }
    const newCat = await Cat.create({name, sex, age})
    return res.json(newCat)
  } catch (err) {
    next(ApiError.badRequest(err.message))
  }

}
const updateCat = async (req, res) => {

}
const deleteCat = async (req, res) => {
  const id = req.params.id
  const catToDelete = await Cat.findByPk(id)
  await catToDelete.destroy()
  return res.json({message: 'Cat deleted successfully', data: catToDelete})
}

export default {
  getAllCats,
  getCat,
  createCat,
  updateCat,
  deleteCat
}