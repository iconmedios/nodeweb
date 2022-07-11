const express = require('express')
const expressLayouts = require('express-ejs-layouts')

require('dotenv').config()
const port = process.env.PORT || 8082;
const app = express()

app.set('view engine', 'ejs')
app.use (express.static('public'))
app.use (expressLayouts)
//app.use (express.static('public'));

app.get('/', (req, res)=> {
  res.render('inicio', {title: 'Inicio'} )
})
app.get('/acerca', (req, res)=> {
  res.render('acerca', {
    title: 'Acerca'
  })
})
app.get('/contacto', (req, res)=> {
  res.render('contacto', {
    title: 'Contacto'
  })
})
// layout personalizado
app.get('/blog/post', function(req, res) {
  res.render('blog/post.ejs', { layout: 'blog/blog-layout' });
});

app.get('*', (req, res)=> {
    res.send('error 404')
  })

//   res.render('pages/index', {
//     mascots: mascots,
//     tagline: tagline
// });

app.listen(port, ()=>{
    console.log(`Server en linea, puerto: ${port}`)
});