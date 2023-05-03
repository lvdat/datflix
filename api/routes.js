import express from 'express'
import { getAllCountry, getCountryByIsoCode } from './controllers/country.controller.js'
import { getAllCategory, getCategoryBySlug, createCategory } from './controllers/category.controller.js'
import { getAllPeople, getPeopleById, createPeople } from './controllers/people.controller.js'
import { checkBeforeLogin } from './middleware/checkLogin.js'
import { login } from './controllers/user.controller.js'
import { checkToken } from './middleware/checkToken.js'

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
router.route('/category')
    .post([checkToken, createCategory])
router.route('/category/:slug')
    .get(getCategoryBySlug)


// People
router.route('/people')
    .get(getAllPeople)
    .post([checkToken, createPeople])

// auth
router.route('/auth/login')
    .post([checkBeforeLogin, login])


export default router