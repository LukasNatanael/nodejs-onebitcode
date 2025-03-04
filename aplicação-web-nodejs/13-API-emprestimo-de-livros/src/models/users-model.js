const uuid = require('uuid').v4
const bcrypt = require('bcrypt')

const users = [
    { 
        id: uuid(),
        name: 'Lukas',
        email: 'lukas@gmail.com',
        password: bcrypt.hashSync( 'root1234', 10 ), // esta incriptando a senha
        role: 'admin'
    }
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
            password: bcrypt.hashSync( password, 10 ),
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