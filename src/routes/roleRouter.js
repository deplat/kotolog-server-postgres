import {Router} from "express";
import roleController from "../controllers/roleController.js"

export default Router()
.get('/', roleController.getAllRoles)
.get('/:id', roleController.getOneRole)
.post('/', roleController.createRole)
.patch('/:id', roleController.updateRole)
.delete('/:id', roleController.deleteRole)