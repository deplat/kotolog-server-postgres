import "dotenv/config"
import express from "express"
import router from "./routes/routes.js"
import dbKotolog from "./database.js"
import {errorHandler} from "./middleware/ErrorHandlerMiddleware.js";

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use('/api', router)

app.use(errorHandler)

const startServer = async () => {
  try {
    await dbKotolog.authenticate()
    await dbKotolog.sync()

    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`))
  } catch (err) {
    console.log(err)
  }
}
// TODO
startServer()