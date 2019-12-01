const app = require('express')()

const bodyParser = require('body-parser')
const port = 3000
const cors = require('cors')
const multer = require('multer')
const upload = multer({
    dest: './uploads',
    storage: multer.diskStorage({

        filename: function (req, file, cb) {
          cb(null, Date.now() + '-' + file.originalname)
        }
      })
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('veio')

})


app.listen(port)

console.log('Rolando na ' + port)