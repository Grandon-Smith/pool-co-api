const app = require('./app')

const { PORT } = require('./config')

app.post('/register', (req, res, next) => {
  const { email, password } = req.body
  if(!user) {
    res.status(400).json({error: "You must enter an email."})
    return
  } else if (!password) {
    res.status(400).json({error: "You must enter a password."})
    return
  }
  else {
    // Check in database if this user exists
  }
})

app.get('/', (req, res) => {
  res.send('Hello, world!')
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})