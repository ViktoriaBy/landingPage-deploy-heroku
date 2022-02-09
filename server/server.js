const express = require('express')
const cors = require('cors')
const path = require('path') //for heroku

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')) //path.join joins heroku path(__dirname) with ours
})


const port = process.env.PORT || 4000 //for heroku only

app.listen(port, () => console.log(`Server running on 4000`))