require("dotenv").config({ path: "./config/config.env" })
const mongoose = require('mongoose')
module.exports = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongoDevelopment, {
            useFindAndModify: false,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connect ${conn.connection.host}`)

    } catch (error) {
        console.warn(error);
        process.exit(1);
    }
}

