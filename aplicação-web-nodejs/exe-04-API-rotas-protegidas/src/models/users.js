const users = [
    {
        name:     'Lukas',
        email:    'lukas@gmail.com',
        pass:     'IamAdmin',
        position: 'admin'

    },
    {
        name:     'Jonas',
        email:    'jonas@gmail.com',
        pass:     '12345',
        position: 'standard',
    },
    {
        name: "Matheus G.",
		email: "matheus@gmail.com",
		pass: "ImSoBeauty",
        position: 'standard',
	}
]

const findUserByEmail = (email) => {
    const user = users.find( user => user.email === email )
    return user
}

module.exports = { users, findUserByEmail}