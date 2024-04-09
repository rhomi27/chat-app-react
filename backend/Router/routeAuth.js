import express from 'express'
import { LogOut, SignIn, SignUp } from '../Controller/AuthController.js'

const router = express.Router()

router.post('/signup', SignUp)

router.post('/signin', SignIn)

router.post('/signout', LogOut)


export default router