const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.get('/', (req, res) => {
    res.send('Hello node API')
})

//fetch all items in database
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//fetch item by it's id
app.get('/products/:id', async(req, res)=> {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Create a new item
app.post('/product', async(req, res) => {
     try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
     } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
     }
    })

    //update item
    app.put('/products/:id', async(req, res)=> {
        try {
            const {id} = req.params;
            const product = await Product.findByIdAndUpdate(id, req.body);
            //couldnt find any product in the databaase
            if(!product){
                return res.status(404).json({message: `Cannot find item by id ${id}`})
            }
            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json({message: `Cannot find item by id ${id}`})
        }
    })
    
    //Delete item
    app.delete('/products/:id', async(req, res) => {
        try {
           const {id} = req.params;
           const product = await Product.findByIdAndDelete(id);
           if(!product){
            return res.status(404).json({ message: `Cannot find any item with id ${id}`})
           }
           res.status(200).json(product);        
        } catch (error) {
           console.log(error.message)
           res.status(500).json({message: error.message})
        }
       })

// app.post('/product', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// })

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://Admin275:123123asd@tompasapi.4incf78.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, () =>{
    console.log('Node API app is running on port 3000')
})
}).catch((error) => {
    console.log(error)
})