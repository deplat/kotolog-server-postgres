import {Router} from "express";
import colorController from "../controllers/colorController.js";
import multer from "multer";

export default Router()
  .get('/', colorController.getAllColors)
  .post('/', colorController.createColor)
  .patch('/:id', multer().none(), colorController.updateColor)
  .delete('/:id', colorController.deleteColor)