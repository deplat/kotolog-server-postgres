import {Album, Cat} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

const getAllCats = async (req, res, next) => {
  try {
    const params = req.params
    const cats = await Cat.findAll(params)
    return res.json(cats)
  } catch (err) {
    next(ApiError.internal(err.message))
  }
}
const getCat = async (req, res, next) => {
  try {
    const id = req.params.id
    const cat = await Cat.findByPk(id)
    return res.json(cat)
  } catch (err) {
    next(ApiError.badRequest(err.message))
  }

}
const createCat = async (req, res, next) => {
  try {
    const {name, sex, age, colors, info} = req.body
    const newCat = await Cat.create({name, sex, age})
    return res.json(newCat)
  } catch (err) {
    next(ApiError.badRequest(err.message))
  }
}

const createCatWithAvatar = async (req, res, next) => {
  try {
    const {name, sex, age, colors, info} = req.body
    const avatar = req.file.path
    const newCat = await Cat.create({name, sex, age, avatar})
    return res.json(req.file)
  } catch (err) {
    next(ApiError.badRequest(err.message))
  }
}

const getCatAlbum = async (req, res, next) => {
  try {
    const catId = req.params.id
    const cat = await Album.findOne({where: { catId } })
  } catch (err) {
    next(ApiError.badRequest(err.message))
  }
}

const addPhotosToCatAlbum = async(req, res, next) => {
  const files = req.files
  let photos = []
  files.map((file, i )=> photos[i] = file.path )
  return res.json(photos)
}

const updateCat = async (req, res) => {

}

const deleteCat = async (req, res, next) => {
  try {
    const id = req.params.id
    const catToDelete = await Cat.findByPk(id)
    await catToDelete.destroy()
    return res.json({message: 'Cat deleted successfully', data: catToDelete})
  } catch (err) {
    next(ApiError.badRequest(err.message))
  }
}

export default {
  getAllCats,
  getCat,
  createCat,
  createCatWithAvatar,
  getCatAlbum,
  addPhotosToCatAlbum,
  updateCat,
  deleteCat
}