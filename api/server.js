const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();
const app = express();

const key = process.env.API_KEY;

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
    await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
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
app.get('/api/shows/:query', async (req, res) => {
  try {
    const query = req.params.query;
    await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&page=1&query=${query}&include_adult=false`,
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
app.get('/api/show/:id/recommendations', async (req, res) => {
  try {
    const id = req.params.id;
    await fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${key}&language=en-US&page=1`,
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
app.get('/api/show/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`,
    )
      .then((response) => response.json())
      .then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});
