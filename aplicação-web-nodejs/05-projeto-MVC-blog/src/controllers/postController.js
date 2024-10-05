const postModel = require("../models/postModel")

const postController = {
    // GET /
    index: (request, response) => {
        const posts = postModel.getAllPosts()
        response.render('index', { posts })
    },

    // GET /posts/:id
    show: (request, response) => {
        const id = request.params.id
        const post = postModel.getPostById(id)
        
        response.render('post', { post })
    }

}


module.exports = postController