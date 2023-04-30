import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import logger from 'morgan'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

const port = process.env.SERVER_PORT || 3000
const corOptions = {
    origin: process.env.CLIENT_URL || '*',
    optionsSuccessStatus: 200,
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cors(corOptions))

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        console.log("Cannot connect to MongoDB", err)
        process.exit()
    })

app.listen(port, () => {
    console.log(`DATFLIX API running on port ${port}`)
})