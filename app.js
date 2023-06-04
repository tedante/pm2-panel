// import * as pm from "./modules/pm2.js"

// let data = await pm.list()

// console.log(data);
import express from "express"
import 'dotenv/config'
import router from "./routes/index.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use("/", router)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})