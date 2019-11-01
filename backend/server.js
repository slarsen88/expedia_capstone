const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const multer = require('multer')

const PORT = process.env.PORT || 3001

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }
})

app.get('/', (req, res) => {
  res.send('Got the request')
})

app.post('/api/upload', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
