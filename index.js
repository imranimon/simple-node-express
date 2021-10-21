const express = require('express');
var cors = require('cors')
const port = process.env.PORT || 5000;
const app = express();
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Wow, I am learning node!')
})

const users = [
    { id: 0, name: 'Shaban', email: 'shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '01788888891' },
    { id: 2, name: 'Shrabonti', email: 'shrabonti@gmail.com', phone: '01788888881' },
    { id: 3, name: 'Shuchorits', email: 'shuchorita@gmail.com', phone: '01788888887' },
    { id: 4, name: 'Sonia', email: 'sonia@gmail.com', phone: '01788888888' },

]

// use search query
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    } else {
        res.send(users)
    }

});

// using dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana'])
})



// app method
app.post('/users', (req, res) => {
    console.log('Heating the post')
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    res.json(newUser)
})











app.listen(port, () => {
    console.log('Listening to port', port);
})