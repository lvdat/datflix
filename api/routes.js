import express from 'express'
import { getAllCountry, getCountryByIsoCode } from './controllers/country.controller.js'
import { getAllCategory, getCategoryBySlug } from './controllers/category.controller.js'
import { getAllPeople } from './controllers/people.controller.js'

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

// Category
router.route('/categories')
    .get(getAllCategory)
router.route('/category/:slug')
    .get(getCategoryBySlug)

// People
router.route('/people')
    .get(getAllPeople)

export default router