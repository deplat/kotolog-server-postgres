import "dotenv/config"
import express from "express"
import router from "./routes/routes.js"
import dbCats from "./database.js"
import models from "./models/models.js"
import {User} from "./models/User.js";
import {errorHandler} from "./middleware/ErrorHandlerMiddleware.js";

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use('/api', router)

app.use(errorHandler)

const startServer = async () => {
  try {
    await dbCats.authenticate()
    await dbCats.sync()

    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`))
  } catch (err) {
    console.log(err)
  }
}

startServer()