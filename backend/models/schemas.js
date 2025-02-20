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

const Post = mongoose.model('Posts', postSchema, 'posts')
const mySchema = {'Post': Post}

module.exports = mySchema
