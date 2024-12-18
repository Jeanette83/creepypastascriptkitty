const express = require('express')
const cors = require('cors') //we need cors to access our server from different domains
const bodyParser = require('body-parser') //mainly used for form posts, may be able to remove later
const router = require('./routes/router')  //routes has to have it's own file, otherwise index would get unruly

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

const port = 4000
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
