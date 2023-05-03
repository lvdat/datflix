import express from 'express'
import { getAllCountry, getCountryByIsoCode } from './controllers/country.controller.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

// country
router.route('/country')
    .get(getAllCountry)
router.route('/country/:isocode')
    .get(getCountryByIsoCode)

//

export default router