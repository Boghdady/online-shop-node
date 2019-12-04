const path = require('path');
const express = require('express');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'assets'))); // Serve static files
app.set('view engine', 'ejs'); // Tell express to use EJS engine
app.set('views', 'views'); // default view

app.get('/', (req, res, next) => {
	res.send('Starting workking on onlie shop');
});
app.listen(3000, () => console.log('Server listening on port 3000'));
