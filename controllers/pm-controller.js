import * as pm from "../modules/pm2.js"

export const getList = async (req, res) => {
  try {
    let data = await pm.list()
  
    res.render("index", { data })
  } catch (error) {
    res.send(error)
  }
}