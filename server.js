const express = require('express');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('./app/public'));
app.use(morgan('dev'));

// Set up routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Start server
app.listen(PORT, () => console.log(`Express server listening on port: ${PORT}`));