const uuid = require('uuid').v4

const users = [
    { id: uuid(), name: 'Lukas', email: 'lukas@gmail.com', password: 'root1234', role: 'admin' }
]

class UsersModel {
    constructor( users ) {
        this.users = users
    }

    findAll() {
        return this.users
    }
    
    findUserById(id) { 
        return users.find( user => user.id === id) 
    }
    
    findUserByEmail(email) {
        return users.find(user => user.email === email)
    }

    registerUser(name, email, password, role='standard') {
        const userAlreadyExist = this.findUserByEmail(email)
        
        if (userAlreadyExist) return null

        const newUser = {
            id: uuid(),
            name,
            email,
            password,
            role
        }

        this.users.push( newUser )
        return newUser
        
    }

    deleteUser(id) {
        const userToDelete = this.findUserById(id)
        if(!userToDelete) return null

        this.users = this.users.filter( user => user.id !== id )

        return userToDelete
    }

}

module.exports = new UsersModel(users)