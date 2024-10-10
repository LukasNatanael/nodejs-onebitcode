const listsModel = require("../models/listsModel")

const appController = {

    index: (req, res) => {
        const list = listsModel.getAll()
        res.render('app', { list })
    },
    delete: (req, res) => {
        const id = req.params.id
        const item = listsModel.delete(id)

        res.redirect('/app')
    }

}

module.exports = appController