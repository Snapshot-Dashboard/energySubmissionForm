const express = require('express')
const router = express.Router()
const { getOil, postOil, updateOil, deleteOil } = require('../controllers/OilController')

router.route('/').get(getOil).post(postOil)
router.route('/:id').put(updateOil).delete(deleteOil)

module.exports = router