import {Album} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

const getAllAlbums = async (req, res, next) => {
  try {
    const allAlbums = await Album.findAll()
    return res.json(allAlbums)
  } catch( err) {
    next(ApiError.internal(err.message))
  }
}

export default {
  getAllAlbums
}