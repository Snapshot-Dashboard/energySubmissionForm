const { default: mongoose } = require('mongoose')
const debug = require('debug')('app:startup')

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_TEST)
        debug(`${conn.connection.host}`)
    } catch (error) {
        debug(`${error}, Error!`)
        process.exit(1)
    }
}

module.exports = connectDB