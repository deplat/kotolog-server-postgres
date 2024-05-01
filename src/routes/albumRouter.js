import {Router} from "express";
import albumController from "../controllers/albumController.js";

export default Router()
.get('/', albumController.getAllAlbums)
