const uuid      = require('uuid').v4
const bcrypt    = require('bcrypt')
const HttpError = require('../errors/HttpError')

const users = [
    {
        id:    '1',
        name:  'Lukas',
        email: 'lukasD@tornado.com',
        pass:  bcrypt.hashSync('ImSuperUser', 10),
        role:  'admin',
        loans: [
            {
                id:     '1',
                userId: '1',
                bookId: '1',
                loanDate: new Date('2024-01-01'),
                returnDate: null,
                isReturned: null,
                isLate: true
            },
            {
                id:     '2',
                userId: '1',
                bookId: '2',
                loanDate: new Date('2020-01-01'),
                returnDate: null,
                isReturned: null,
                isLate: true
            }
        ]
    }
]

class UsersModel {
    constructor(usersArray) {
        this.users = usersArray
    }

    getAll() {
        return this.users
    }
    
    getById(id) {
        if ( typeof id !== 'string' ) throw new HttpError(400, 'Invalid fields!')

        const user = this.users.find( user => user.id == id )
        if (!user) return null

        return user
    }

    getByEmail(email) {
        if ( typeof email !== 'string' ) throw new HttpError(400, 'Invalid fields!')

        const user = this.users.find( user => user.email == email )
        if (!user) return null

        return user
    }

    registerUser(name, email, pass, role='standard') {

        if (typeof name  != 'string' ||
            typeof email != 'string' ||
            typeof pass  != 'string' ||
            typeof role  != 'string' ||
            !role.match(/admin|standard/)
        ) throw new HttpError(406, 'Invalid fields')

        const userExists = this.getByEmail(email)

        if (userExists) throw new HttpError(400, 'User already exists!')

        const newUser = {
            id: uuid(),
            name:  name,
            email: email,
            pass:  bcrypt.hashSync(pass, 10),
            role:  role,
            loans: []
        }

        this.users.push(newUser)
        return newUser
    }
    
    updateData(id, updatedData) {
        const user = this.getById(id)
        if (!user) throw new HttpError(404, 'User id not found!')


        const userIndex = this.users.findIndex( user => user.id == id )
        if (!userIndex) throw new HttpError(404, 'User to update not found!')

        updatedData.role = !updatedData.role ? user.role : updatedData.role

        const name  = updatedData.name
        const email = updatedData.email
        const pass  = updatedData.pass
        const role  = updatedData.role.match(/admin|standard/) ? updatedData.role = updatedData.role: updatedData.role = 'standard'
            
        if (name && typeof name   != 'string' ||
            email && typeof email != 'string' ||
            pass && typeof pass   != 'string' ||
            role && typeof role   != 'string' 
        ) throw new HttpError(406, 'Invalid fields')

        this.users[userIndex] = { ...user, ...updatedData }

        return this.users[userIndex]
    }

    deleteUser(id) {
        const user = this.getById(id)
        if (!user) throw new HttpError(404, 'User not found!')
        
        this.users = this.users.filter( user => user.id != id )

        return user
    }

    getLoans(id) {
        const user = this.getById(id)
        if (!user) throw new HttpError(404, 'User id not found!')
        
        const loans = user.loans

        return loans
    }
}

module.exports = new UsersModel(users)