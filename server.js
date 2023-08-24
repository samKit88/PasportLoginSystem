express = require('express');
require ('dotenv').config();
const port = process.env.PORT || 3000

app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    
});

app.listen(port, (req, res)=>  {
    console.log(`Server is listing in port ${port}`);
})