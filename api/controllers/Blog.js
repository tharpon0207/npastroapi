'use strict';
const Blog = require('../model/blogpost');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;  

async function upload(req, res, next) {
    let post = req.body;

    // if (!title || !madebyID || !body) {
    //     return res.status(400).json({
    //         error: true,
    //         message: 'Title, content, and author are required.'
    //     });
    // }

    try {
        const newPost = await Blog.create({
            title: post.title,
            madebyID: post.madebyID,
            body: post.body,
        });
        console.log('New blog post added:', newPost.toJSON());  
        res.json({
            error: false,
            message: 'Blog post successfully created',
            post: newPost
        });     
    } catch (error) {
        console.error('Error adding blog post:', error);
        res.status(500).json({ error: true, message: 'Error adding blog post', details: error.message });
    }
}

async function getAllPosts(req, res, next) {
    try {
        const posts = await Blog.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json({
            error: false,
            posts: posts
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ error: true, message: 'Error fetching blog posts', details: error.message });
    }
}

module.exports = { upload, getAllPosts };