import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './Router/routeAuth.js'
import messageRoutes from './Router/routeMessage.js'
import userRoute from './Router/routeUser.js'
import connectToMongoDb from './Database/connectDb.js'

dotenv.config()


const app = express()
const PORT = process.env.PORT || 4011

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoute)
app.use('/api/messages', messageRoutes)




app.listen(PORT, () => {
    connectToMongoDb()
    console.log('server is running',PORT)
})