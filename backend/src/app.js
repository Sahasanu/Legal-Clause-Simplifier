import express from 'express'
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";


const app = express()
//middleware
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)

export default app
