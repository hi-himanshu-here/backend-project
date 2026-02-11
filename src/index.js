/*
require("dotenv").config({path: "./env"})

this needs to be at the top of the file because we need to load the environment variables before we can use them.
But an improved way is to use import instead of require, and we can use the ES6 module syntax to import the dotenv library and load the environment variables.
*/

import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: "./env"
})

connectDB()


















/*
import express from "express"

const app = express()

// function connectDB() {}
// connectDB()

// better way is to use iffy- immediately invoked function expression

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`APP is listening on port ${process.env.PORT}`)
        })

    } catch(error) {
        console.log("Error: ", error)
        throw error
    }
})()

*/
