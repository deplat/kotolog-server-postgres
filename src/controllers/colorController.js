import {Color} from "../models/Color.js";
import {ApiError} from "../error/ApiError.js";
import err from "multer/lib/multer-error.js";

const getAllColors = async (req, res, next) => {
    try {
        const {params} = req.params
        const colors = await Color.findAll(params)
        res.json(colors)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}
const createColor = async (req, res, next) => {
    try {
        const name = req.body.name
        const newColor = await Color.create({name})
        return res.json(newColor)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }

}
const updateColor = async (req, res, next) => {
    try {
        const id = req.params.id
        const {name} = req.body
        const colorToUpdate = await Color.findByPk(id)
        const updatedColor = await colorToUpdate.update({name})
        const response = {
            id: updatedColor.id,
            name: updatedColor.name
        }
         return res.json(response)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}
const deleteColor = async (req, res, next) => {
    try {
        const id = req.params.id
        const colorToDelete = await Color.findByPk(id)
        await colorToDelete.destroy()
        return res.status(200).json({
            id,
            message: 'Deleted successfully'
        })
    } catch {
        err
    }
    {
        next(ApiError.badRequest(err.message))
    }
}

export default {
    getAllColors,
    createColor,
    updateColor,
    deleteColor
}