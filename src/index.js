const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const port = 3000

const app = express()

// HTTP logger
app.use(morgan('combined'))

// Template Engine
app.engine('.hbs', handlebars({
  extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resourses/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})
 
app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`)
})