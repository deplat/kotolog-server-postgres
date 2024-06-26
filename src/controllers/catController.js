import {Cat, CatAlbum, CatInfo} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

const getAllCats = async (req, res, next) => {
    try {
        //const params = req.params
        const filter = {}
        const cats = await Cat.findAll(filter)
        return res.json(cats)
    } catch (err) {
        next(ApiError.badRequest(err.message))
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
        if (colors) {
            // TODO
        }
        const newCat = await Cat.create({name, sex, age})
        if (info) {
            /* Try to include 'info' from 'cat_info' into Cat.create()
             * But first check if it worth that :)
             */
            await CatInfo.create({catId: newCat.id, info})
        }
        return res.json(newCat)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

const createCatWithAvatar = async (req, res, next) => {
    try {
        const {name, sex, age, colors, info} = req.body
        const avatar = req.file.filename
        const newCat = await Cat.create({name, sex, age, avatar})
        if (info) {
            /* Try to include 'info' from 'cat_info' into Cat.create()
             * But first check if it worth that :)
             */
            await CatInfo.create({catId: newCat.id})
        }
        if (colors) {
            // TODO
        }

        return res.json(newCat)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

const getCatAlbum = async (req, res, next) => {
    try {
        const catId = req.params.id
        const album = await CatAlbum.findByPk(catId)
        return res.json(album)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

const addPhotosToCatAlbum = async (req, res, next) => {
    try {
        const catId = req.params.id
        const photosToAdd = req.files.map((photo) =>  photo.path)
        const [album] = await CatAlbum.findCreateFind({where: {catId}})
        album.photos = [...album.photos, ...photosToAdd]
        await album.save()
        return res.json(album)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

const updateCat = async (req, res) => {
    /*
     *    TODO
     *
     */
}

const deleteCatAndCatAlbum = async (req, res, next) => {
    try {
        const id = req.params.id
        const catId = id // Fix duplication?
        const catToDelete = await Cat.findByPk(id)
        const catAlbumToDelete = await CatAlbum.findByPk(catId)
        await catAlbumToDelete.destroy()
        await catToDelete.destroy()
        return res.json({message: 'Cat deleted successfully'})
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
    deleteCatAndCatAlbum
}