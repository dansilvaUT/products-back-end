require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    productCtr = require('./products_controller'),
    { SERVER_PORT, CONNECTION_STRING } = process.env,
    app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('DB connected');
}).catch(err => console.log(`Error connected to database ${err.message}`));


//ENDPOINTS
app.get('/api/products', productCtr.getAll);
app.get('/api/products/:id', productCtr.getOne);
app.put('/api/products/:id', productCtr.update);
app.post('/api/products', productCtr.create);
app.delete('/api/products/:id', productCtr.delete);

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`));