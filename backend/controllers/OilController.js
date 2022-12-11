const asyncHandler = require('express-async-handler')
const Oil = require('../model/OilModel')

const getOil = (req, res) => {
    Oil.find({}, (err, result) => {
        if (err) {
            res.status(400)
            throw new Error('Error With Server')
        }
        res.status(200).send(result)
    })
}

const postOil = async (req, res) => {
    const { Category, DateOfData, Value } = req.body
    const oil = new Oil({ Category, DateOfData, Value })
    await oil.save()
    res.send(oil)
}

const updateOil = (req, res) => {
    const { id } = req.params
    res.send('UPDATE')
}

const deleteOil = (req, res) => {
    const { id } = req.params
    Oil.findByIdAndDelete(id).exec()
    res.send('DELETE')
}

module.exports = { getOil, postOil, updateOil, deleteOil }