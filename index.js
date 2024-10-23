let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})