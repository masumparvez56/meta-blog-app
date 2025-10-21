const express = require('express');
const Blog = require('../models/blog.model');

const router = express.Router();

// get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({createdAt: -1})
        res.status(200).send({ message: "Blogs fetched successfully", blogs })
    } catch (error) {
      console.error("Error fetching all blogs", error)
        res.status(500).send({ message: "Error fetching all blogs", error })  
    }
})

// post a new blog 
router.post('/add-post', async (req, res) => {
    try {
        const newBlog = new Blog({
          ...req.body
        })

        const blog = await newBlog.save();
        res.status(200).send({ message: "post created successfully", blog })
    } catch (error) {
        console.error("Error Creating a new blog", error)
        res.status(500).send({ message: "Error Creating a new blog", error })
    }

})

module.exports = router;