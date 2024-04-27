import {Router} from "express";
import catRouter from "./catRouter.js";
import colorRouter from "./colorRouter.js";
import userRouter from "./userRouter.js";
import roleRouter from "./roleRouter.js";

export default Router()
  .use('/cats', catRouter)
  .use('/colors', colorRouter)
  .use('/users', userRouter)
  .use('/roles', roleRouter)


