const express = require('express')
const app = express()
const port = process.env.port || 5000;
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')

// middleware
app.use(express.json())
app.use(cors())

// routes
const blogRoutes = require('./src/routes/blog.routes')
app.use('/blogs', blogRoutes)

// mongoose configuration
async function main() {
    await mongoose.connect(process.env.DB_URL);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

main().then(() => console.log("mongoodb connected successfully")).catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Meta Blog Server is running...!')
})


