import {Router} from "express"
import catController from "../controllers/catController.js"
import {albumUpload, avatarUpload} from "../middleware/FileUploaderMiddleware.js";


export default Router()
  .get('/', catController.getAllCats)
  .get('/:id', catController.getCat)
  .post('/', catController.createCat)
  .post('/withAvatar', avatarUpload, catController.createCatWithAvatar)

  .get('/:id/album', catController.getCatAlbum)
  .post('/:id/album', albumUpload, catController.addPhotosToCatAlbum)

  .patch('/:id', catController.updateCat)
  //.patch('/:id/avatar', catController.updateCatAvatar)

  .delete('/:id', catController.deleteCatAndCatAlbum)
  //.delete(':id/avatar', catController.deleteCatAvatar)