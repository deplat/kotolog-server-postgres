import {Router} from "express"
import catController from "../controllers/catController.js"
import multer from "multer"
import { v1 as uuidv1 } from "uuid"
import * as fs from "node:fs"

const avatarStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'static/avatars')
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

const avatarUpload = multer({storage: avatarStorage}).single('avatar')
const albumUpload = multer({storage: albumStorage}).array('photos',20)


export default Router()
  .get('/', catController.getAllCats)
  .get('/:id', catController.getCat)
  .post('/', catController.createCat)
  .post('/withAvatar', avatarUpload, catController.createCatWithAvatar)

  .get('/:id/album', catController.getCatAlbum)
  .post('/:id/album', albumUpload, catController.addPhotosToCatAlbum)

  .patch('/:id', catController.updateCat)
  //.patch('/:id/avatar', catController.updateCatAvatar)

  .delete('/:id', catController.deleteCat)
  //.delete(':id/avatar', catController.deleteCatAvatar)