//even though there is no actual database for this project I wanted to make the model for it, in case I want
// to add a backend later


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema ({
    image: {
        type: String
    },
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('Post', postSchema)
