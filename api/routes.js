import express from 'express'
import { getAllCountry } from './controllers/country.controller.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

// country
router.route('/country')
    .get(getAllCountry)

export default router