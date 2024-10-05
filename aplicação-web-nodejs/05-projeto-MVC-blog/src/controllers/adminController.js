const postModel = require("../models/postModel")

const adminController = {
    // GET /admin
    index: (request, response) => {
        const posts = postModel.getAllPosts()
        response.render('admin', { posts })
    },

    // GET /admin/create
    create: (request, response) => {
        response.render('newPostForm')
    },

    // POST /admin/create
    save: (request, response) => {
        const { title, content } = request.body

        const newPost = postModel.createPost( title, content )
        postModel.savePost(newPost)

        response.redirect('/admin')
    },
    
    // GET /admin/edit/:id
    edit: (request, response) => {
        const id = request.params.id
        const post = postModel.getPostById(id)

        response.render('editPostForm', { post })
    },

    // POST /admin/update/:id
    update: (request, response) => {
        const id = request.params.id
        const { title, content } = request.body

        postModel.updatePost(id, { title, content })

        response.redirect('/admin')
    },

    // POST /admin/delete/:id
    delete: (request, response) => {
        const id = request.params.id
        postModel.deletePost(id)

        response.redirect('/admin')
    }
}

module.exports = adminController