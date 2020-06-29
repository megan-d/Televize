const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();
const app = express();

app.get('/', (req, res) => res.send('API Running'));

//To get access to req.body (no longer need body parser npm package)
app.use(express.json());

//Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

//Define Routes


//ROUTE: GET api/shows/popular
//DESCRIPTION: Get popular shows from TMDb to send to front end
app.get('/api/shows/popular', async (req, res) => {
    try {
      await res.send('Popular route');
    //   res.json(user);
    } catch(err) {
      console.err(err.message);
      res.status(500).send('Server Error');
    }
  });

//ROUTE: GET api/shows/airing
//DESCRIPTION: Get shows airing today from TMDb to send to front end
app.get('/api/shows/airing', async (req, res) => {
    try {
      await res.send('Airing today route');
    //   res.json(user);
    } catch(err) {
      console.err(err.message);
      res.status(500).send('Server Error');
    }
  });

//ROUTE: GET api/shows/onair
//DESCRIPTION: Get shows currently on air from TMDb to send to front end
app.get('/api/shows/onair', async (req, res) => {
    try {
      await res.send('Currenty on air route');
    //   res.json(user);
    } catch(err) {
      console.err(err.message);
      res.status(500).send('Server Error');
    }
  });

//ROUTE: GET api/shows/?show={query}
//DESCRIPTION: Get search results for show


//ROUTE: GET api/shows/{id}/recommendations
//DESCRIPTION: Get recommendations from TMDb to send to front end


//ROUTE: GET api/shows/{id}
//DESCRIPTION: Get details for specific show from TMDb to send to front end