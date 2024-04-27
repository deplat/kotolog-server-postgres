import {Router} from "express";
import colorController from "../controllers/colorController.js";

export default Router()
  .get('/', colorController.getAllColors)
  .post('/', colorController.createColor)
  .patch('/:id', colorController.updateColor)
  .delete('/:id', colorController.deleteColor)