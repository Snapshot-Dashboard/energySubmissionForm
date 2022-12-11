require('dotenv').config()
const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const debug = require('debug')('app:startup')
const OilRoutes = require('./routes/OilRoutes')
const connectDB = require('./connections/ConnectDB')

const app = express()
const { PORT } = process.env || 40

// * Middleware
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '1kb' }))
app.use((req, res, next) => {
    debug(req.path, req.method)
    next()
})

// TODO Routes & Controllers
app.use('/api/oil', OilRoutes)

// ! Connections
connectDB()
app.listen(PORT, debug(`Server is on PORT: ${PORT}`))
