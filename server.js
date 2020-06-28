const express = require('express');
const port = process.env.PORT || 5000;
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Import routes

dotenv.config();
const app = express();

//To get access to req.body (no longer need body parser npm package)
app.use(express.json());