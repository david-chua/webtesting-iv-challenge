require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 9090;
server.listen(port, () => console.log(`\n** listening on port ${port} ** /n`));
