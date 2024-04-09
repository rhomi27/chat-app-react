import express from 'express'
import { getUser } from '../Controller/UserController.js'
import protectRoute from '../Middleware/protectRoute.js'

const router =  express.Router()
router.get('/',protectRoute, getUser)

export default router