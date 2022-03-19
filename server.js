const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 3001;

// Add middleware for handling CORS requests from index.html
app.use(cors());

// Add middware for parsing request bodies here:
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send("Hello world!");
})


// Add your code to start the server listening at PORT below:
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  })