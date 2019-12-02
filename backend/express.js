/* eslint-disable no-console */
const app = require('express')()
const bodyParser = require('body-parser')
const port = 3000
const cors = require('cors')
const cloudinary = require('cloudinary').v2
const uniqueFilename = new Date().toISOString()
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

const clients = []

// CADASTRAR CLIENTES

app.post('/upload', upload.single('file'), (req, res) => {

  // SEND FILE TO CLOUDINARY

  cloudinary.config({
    cloud_name: 'dvzbogxib',
        api_key: '564392447589239',
        api_secret: 'lBY9lvTcbNawz-AyvEg9WMW_ga8'
  })

  cloudinary.uploader.upload(req.file.path, {
      public_id: `${uniqueFilename}`,
    },

  function (err, image) {
    if (err) res.send(err)
    console.log('file uploaded to Cloudinary')
    // remove file from server
    const fs = require('fs')
    fs.unlinkSync(req.file.path)
    // return image details
    res.json(image)

    console.log(image)
    console.log(image.url)

    const newRegister ={
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      file: image.url
    }

    console.table(req.body)

    clients.push(newRegister)

    console.log(clients)

    } 

  )

    // PEGAR CLIENTES

  app.get('/clients', (req, res) => {
    res.send(clients)
  })

})

app.listen(port)

console.log('Rolando na ' + port)