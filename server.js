const express = require('express');
const dotenv = require('dotenv');

//import routes
const routes = require('./api/routes');

dotenv.config();
const app = express();

app.get('/', (req, res) => res.send('API Running'));

//To get access to req.body (no longer need body parser npm package)
app.use(express.json());

//Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listening on port ${port}`));