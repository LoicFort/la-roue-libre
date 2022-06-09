import 'dotenv/config';


import express, { urlencoded, static as fix } from 'express';
import router from './app/router.js';
import path from 'path';
const app = express();

// En attente de finalisation du projet
// const cors = require('cors');
// const session = require ('express-session');




app.use(urlencoded({extended: true}));
app.use(fix('./public'));
app.set('view engine', 'ejs');
app.set('views','./app/views'); 

app.use(router);

const PORT = process.env.PORT;



app.listen(PORT, () => {
    console.log(`La roue libre TOURNE sur le port ${PORT}`);
    
})