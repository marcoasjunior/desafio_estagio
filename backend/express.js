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


app.post('/upload', upload.single('file'), (req, res) => {

  // SEND FILE TO CLOUDINARY

  cloudinary.config({
    cloud_name: 'dxblalpv2',
    api_key: '533837714717359',
    api_secret: 'bLMSuhK0Oy8_tOrlRcpGmM9IXCI'
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


})

app.listen(port)

console.log('Rolando na ' + port)