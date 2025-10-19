const express = require('express')
const app = express()
const port = process.env.port || 5000;
const mongoose = require('mongoose');

require('dotenv').config()


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


