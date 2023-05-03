const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const chefs = require('./Data/chefs.json');
const recipe = require('./Data/recipe.json');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Food is Loading')
})

app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.get('/recipe', (req, res) => {
  res.send(recipe)
})

app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChef = chefs.find(n => n.id === id); 
  res.send(selectedChef)
})

app.get('/recipe/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedRecipe = recipe.find(n => n.id === id); 
  res.send(selectedRecipe)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})