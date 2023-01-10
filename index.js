const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port = 3500;


/* const handler = (req, res) => {
    res.send('Hello from node')
}; */

app.get('/', (req, res) => {
    res.send('Hello from nodemon auto reload enjoying!')
});

const users = [
    {id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: "0178888888"},
    {id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: "0178888888"},
    {id: 3, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: "0178888888"},
    {id: 4, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: "0178888888"},
    {id: 5, name: 'Soniya', email: 'Soniya@gmail.com', phone: "0178888888"},
    {id: 7, name: 'Susmita', email: 'Susmita@gmail.com', phone: "0178888888"}
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/fruits/mangoes/fazli', (req, res)=> {
    res.send("Mishty mishty fazli aam!")
});

app.get('/usersQ/', (req, res) => {
    console.log(req.query.search)
    res.send(users)
});


app.get('/use', (req, res) => {

    // using "query" parameter Or "search query"
    const searchQuery = req.query.search;
    console.log(searchQuery)
    
    if(searchQuery){
        const result = users.filter(x => x.name.toLowerCase().includes(searchQuery.toLowerCase()))
        console.log(result)

        res.send(result)
    }
    else{
        res.send(users)
    }
});



// dynamic api 
app.get('/users/:x', (req, res) => {
    const index = req.params.x;
    res.send(users[index])
    console.log(req.params.id);
})

app.listen(port, ()=> {
    console.log(`Example app listening on the port ${port}`)
})


// post Method 
app.post('/users', (req, res) => {
    // console.log('Hitting the post!', req.body)
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    res.send(JSON.stringify(newUser))
    // res.json(newUser);
})