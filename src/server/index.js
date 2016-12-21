const express = require('express');
const PORT = 8080
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use('/', express.static(`${process.cwd()}/public`))

app.get('/*', (req, res) =>
  res.sendFile(`${process.cwd()}/public/index.html`)
)

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`)
})
