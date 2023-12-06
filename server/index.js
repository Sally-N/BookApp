const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Load environment variables from the root .env file
require('dotenv').config({ path: '../.env' });

// Load additional environment variables from the server .env file (optional)
// require('dotenv').config({ path: './.env' });

const {Configuration, OpenAiApi} = require('openai');

const config = new Configuration({
    apiKey : process.env.OPEN_AI_KEY
})

const openai = new OpenAiApi(config);

///server setup
const app = express();
app.use(bodyParser.json());
app.use(cors());