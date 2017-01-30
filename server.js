//Requiring dependencies for express server
const express 		= require ('express');
const bodyParser 	= require ('body-parser');
const path 				= require ('path');

//Alerts node that we are creating express server
const app = express();

//Sets a port as process.env or our default 4000;
const PORT = process.env.PORT || 4000;

//Instantiating body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyparser.json({ type: 'application/vnd.api+json '}));

//Requiring routes:
require('./app/routing/api-routes.js');
require('./app/routing/html-routes.js');

//Listening to port
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));