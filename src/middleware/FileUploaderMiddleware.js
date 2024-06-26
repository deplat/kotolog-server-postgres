import multer from "multer"
import { v1 as uuidv1 } from "uuid"
import * as fs from "node:fs"
import * as path from "node:path"
import {ApiError} from "../error/ApiError.js";

const rootDir = path.resolve()
const getFileExtension = (filename) => path.extname(filename)

const avatarStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        const dirPath = `${rootDir}/public/avatar`
        fs.mkdirSync(dirPath, {recursive: true})
        cb(null, dirPath)
    },
    filename: function (req, file, cb) {
        const uniqueName = `${file.fieldname}-${uuidv1()}${getFileExtension(file.originalname)}`
        cb(null, uniqueName)
    }
})

const albumStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dirPath = `${rootDir}/public/${req.params.id}`
        fs.mkdirSync(dirPath, {recursive: true})
        cb(null, dirPath)
    },
    filename: function (req, file, cb) {
        const uniqueName = `${file.fieldname}-${uuidv1()}${getFileExtension(file.originalname)}`
        cb(null, uniqueName)
    }
})

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(ApiError.badRequest('Invalid file type, use JPG or PNG.'), false);
    }
}

export const avatarUpload = multer({
    storage: avatarStorage,
    fileFilter
}).single('avatar')
export const albumUpload = multer({
    storage: albumStorage,
    fileFilter
}).array('photos',20)
