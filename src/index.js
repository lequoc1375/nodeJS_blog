const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const route = require('./routes')
const app = express()
const port = 3000
const db = require('./config/db')

//Connect to db --MODEL
db.connect()

// Logger
app.use(morgan('combined'))

// Template Handlebars engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

//views --VIEWS
app.set('views', path.join(__dirname, 'resources', 'views')) // Đảm bảo bạn có thư mục `views`
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes init --CONTROLLER
route(app)

// Listen
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
