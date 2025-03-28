const express = require('express')
const cors = require('cors') //we need cors to access our server from different domains
const bodyParser = require('body-parser') //mainly used for form posts, may be able to remove later
const router = require('./routes/router')  //routes has to have it's own file, otherwise index would get unruly
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '#',
    credentials: true, 
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/', router)

const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI , dbOptions)
.then(() => console.log('Database connected!'))
.catch(err => console.log(err))

const port = process.env.PORT
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
