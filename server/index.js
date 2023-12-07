const OpenAI = require("openai");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables from the root .env file
require('dotenv').config({ path: '../.env' });

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})


///server setup
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/conversation', async (req, res) => {
    const content = req.body;
    console.log(content)
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: content }],
        model: "gpt-3.5-turbo",
    });

    res.send(chatCompletion.data.choices[0].text);
})

const port = 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port} `)
})