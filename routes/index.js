
import { Router } from "express"
import * as PmController from "../controllers/pm-controller.js"

const router = Router()

router.get('/', PmController.getList)

export default router