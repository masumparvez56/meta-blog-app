// get all blogs

const Blog = require("../models/blog.model")

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 })
        res.status(200).send({ message: "Blogs fetched successfully", blogs })
    } catch (error) {
        console.error("Error fetching all blogs", error)
        res.status(500).send({ message: "Error fetching all blogs", error })
    }
}

// get a single blog by id
const getBlogById = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).send({ message: "No blog found" })
        }
        res.status(200).send({ message: "blog fetched successfully", blog })

    } catch (error) {
        console.error("Error fetching a blog by id", error)
        res.status(500).send({ message: "Error fetching a blog by id", error })
    }
}

// post a new blog 
const postANewBlog = async (req, res) => {
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

}

// delete a blog
const deleteABlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBlog = await Blog.findByIdAndDelete(id);
        if (!deleteBlog) {
            return res.status(404).send({ message: "No blog found" })
        }
        res.status(200).send({ message: "Blog deleted successfully", blog: deleteBlog })
    } catch (error) {
        console.error("Error deleting a blog by id", error)
        res.status(500).send({ message: "Error deleting a blog by id", error })
    }
}

// update a blog
const updateABlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBlog) {
            return res.status(404).send({ message: "No blog found" })
        }
        res.status(200).send({ message: "Blog Updated Successfully", blog: updatedBlog})
    } catch (error) {
        console.error("Error updating a blog by id", error)
        res.status(500).send({ message: "Error updating a blog by id", error })
    }
}

module.exports = {
    getAllBlogs,
    getBlogById,
    postANewBlog,
    deleteABlogById,
    updateABlogById
}