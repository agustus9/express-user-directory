// Using the express library
const express = require('express')
// Using the mustache express library
const mustacheExpress = require('mustache-express')

// Build the express app
const app = express()

// Teach our app to use the mustache engine for rendering templates
// rendering = "draw" our HTML
app.engine('mst', mustacheExpress())

// Teach our app what directory to f\ind our views (templates) live
app.set('views', './views')

// Teach our app to use mustache for our templates
app.set('view engine', 'mst')

// Teach our app to use 'public' for all public static assets (CSS, client side JavaScript, images, videos, fonts, etc.)
app.use(express.static('public'))

app.get('/', (request, response) => {
  // sending content to the browser from javascript land
  // response.send('Hello, World. We are reloading!')

  response.render('home')
})

app.listen(3000, () => {
  console.log('Hooray, our app is listening on port 3000')
})

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
