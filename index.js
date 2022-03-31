require('dotenv').config();


const express = require('express');
const router = require('./app/router.js');
const path = require('path');
const app = express();

// En attente de finalisation du projet
// const cors = require('cors');
// const session = require ('express-session');




app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./app/views'); 

app.use(router);

const PORT = process.env.PORT;



app.listen(PORT, () => {
    console.log(`La roue libre TOURNE sur le port ${PORT}`);
    
})