const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const path = require('path');

dotenv.config();
const app = express();

const key = process.env.API_KEY;

//To get access to req.body (no longer need body parser npm package)
app.use(express.json());

//DEFINE ROUTES

//ROUTE: GET api/shows/popular
//DESCRIPTION: Get popular shows from TMDb to send to front end
app.get('/api/shows/popular', async (req, res) => {
  try {
    await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    )
      .then((response) => response.json())
      .then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

//ROUTE: GET api/shows/airing
//DESCRIPTION: Get shows airing today from TMDb to send to front end
app.get('/api/shows/airing', async (req, res) => {
  try {
    await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    )
      .then((response) => response.json())
      .then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

//ROUTE: GET api/shows/onair
//DESCRIPTION: Get shows currently on air from TMDb to send to front end
app.get('/api/shows/onair', async (req, res) => {
  try {
    await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    )
      .then((response) => response.json())
      .then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// ROUTE: GET api/shows/:query
// DESCRIPTION: Get search results for show
app.get('/api/shows/', async (req, res) => {
  try {
    const query = req.query.show;
    await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&page=1&query=${query}&include_adult=false`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    )
      .then((response) => response.json())
      .then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

//ROUTE: GET api/shows/:id/recommendations
//DESCRIPTION: Get recommendations from TMDb based on a specific show id to send to front end
app.get('/api/shows/:id/recommendations', async (req, res) => {
  try {
    const id = req.params.id;
    await fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${key}&language=en-US&page=1`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    )
      .then((response) => response.json())
      .then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

//ROUTE: GET api/shows/:id
//DESCRIPTION: Get details for specific show from TMDb to send to front end
app.get('/api/shows/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    )
      .then((response) => response.json())
      .then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// Serve static assets in production. Heroku will automatically default the NODE_ENV to production.
if (process.env.NODE_ENV === 'production') {
  // Set static folder (to be public folder). We want index.html to be our static file.
  app.use(express.static('../build'));
  //Return all requests to react app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

//Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is listening on port ${port}`));
