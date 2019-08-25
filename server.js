const express = require('express');
const morgan = require('morgan');

// Init port and Express app
const PORT = process.env.PORT || 8080;
const app = express();

// Set up middleware
app.use(express.static('./app/public'));
app.use(morgan('dev'));
app.use(express.json());

// Set up routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Start server
app.listen(PORT, () => console.log(`Express server listening on port: ${PORT}`));