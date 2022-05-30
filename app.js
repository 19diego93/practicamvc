const express = require('express'); 
const path = require('path');
const app = express();
const port = 3000;

const mainRutas = require('./routers/main');


app.use(express.static(path.join(__dirname,'public')));
app.use('/',mainRutas);

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')
const PORT = process.env.PORT || port;
app.listen(PORT);