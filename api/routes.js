const express = require('express');
const router = express.Router();

//ROUTE: GET api/shows/popular
//DESCRIPTION: Get popular shows from TMDb to send to front end
router.get('/api/shows/popular', async (req, res) => {
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


//ROUTE: GET api/shows/onair
//DESCRIPTION: Get shows currently on air from TMDb to send to front end


//ROUTE: GET api/shows/?show={query}
//DESCRIPTION: Get search results for show


//ROUTE: GET api/shows/recommendations
//DESCRIPTION: Get recommendations from TMDb to send to front end


//ROUTE: GET api/shows/{id}
//DESCRIPTION: Get details for specific show from TMDb to send to front end