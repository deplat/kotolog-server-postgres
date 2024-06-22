import multer from "multer"
import { v1 as uuidv1 } from "uuid"
import * as fs from "node:fs"

const avatarStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        const path = './static/avatar'
        cb(null, path)
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${uuidv1()}`)
    }
})

const albumStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        const path = `./static/albums/${req.params.id}`
        fs.mkdirSync(path, {recursive: true})
        cb(null, path)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname+'-'+uuidv1())
    }
})

export const avatarUpload = multer({storage: avatarStorage}).single('avatar')
export const albumUpload = multer({storage: albumStorage}).array('photos',20)
