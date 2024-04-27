import {Router} from "express"
import userController from "../controllers/userController.js"

export default Router()
  .get('/', userController.getAllUsers)
  .get('/:id', userController.getUser)
  .post('/', userController.createUser)
  .patch('/:id', userController.updateUser)
  .delete('/:id', userController.deleteUser)