const express = require('express')
const axios = require('axios')

const multer = require('multer')
const upload = multer({dest: 'uploads/'})



const app = express()

app.use(express.text())
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(201).send('<h1> Hola Mundo desde Express y desde Vercel!!</h1>')
})


app.post('/productos', (req,res)=>{

    const obj = req.body

    res.status(201).json(obj)
})

app.post('/productos2', (req,res)=>{

    const {name, age} = req.body

    res.status(201).send(`<h2>Saludos: ${name} edad: ${age}</h2>`)
})

app.get('/post', async(req, res)=>{
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts')

    console.log(respuesta.data.length)

    res.json(respuesta.data)
})

app.post('/imagen', upload.single('imagen'), (req,res)=>{

    const imagen = req.file

    console.log(imagen)
    res.status(201).send('Saludos desde imagen')
})


app.get('/:name',(req,res)=>{
    const name = req.params.name
    res.status(202).send(`<h1>Saludos ${name}`)
})


const PORT = process.env.PORT || 4000
console.log(PORT)
app.listen(PORT)