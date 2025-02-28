const mongoose = require('mongoose')
const Schema = mongoose.Schema



/*const articleSchema = new Schema({
    image: {type: String},
    title: {type: String},
    description: {type: String}
})*/

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
