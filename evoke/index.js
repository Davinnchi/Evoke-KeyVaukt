const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DB = require('./config/config');

const KeyVaultRoutes = require('./routes/KeyVaultRoutes');

mongoose.connect(`mongodb://${DB.host}:${DB.port}/${DB.database}`, { useNewUrlParser: true }, (err, con) => {
    if (err) {
        console.log('Error en la conexion');
    } else {
        console.log('Conexion DB Exitosa');
    }
});

app.use(bodyParser.json());
app.use(cors());

app.use(KeyVaultRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Corriendo");
});
