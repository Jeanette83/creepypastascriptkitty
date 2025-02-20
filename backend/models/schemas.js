const mongoose = require('mongoose')
const Schema = mongoose.Schema



/*const articleSchema = new Schema({
    image: {type: String},
    title: {type: String},
    description: {type: String}
})*/

const articleSchema = new Schema ({
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

const Article = mongoose.model('Articles', articleSchema, 'articles')
const mySchema = {'Article': Article}

module.exports = mySchema
