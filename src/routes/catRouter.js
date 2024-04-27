import {Router} from "express";
import catController from '../controllers/catController.js'

export default Router()
  .get('/', catController.getAllCats)
  .get('/:id', catController.getCat)
  .post('/', catController.createCat)
  .patch('/', catController.updateCat)
  .delete('/:id', catController.deleteCat)