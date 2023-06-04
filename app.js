import express from "express"
import 'dotenv/config'
import router from "./routes/index.js"

const app = express()
const PORT = process.env.PORT || 3000

app.set("view engine", "ejs")

app.use("/", router)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})