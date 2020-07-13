const http = require('http');
const app = require('./app');
const sequelize = require('./util/database');
const port = process.env.PORT || 3000;


const server = http.createServer(app);
console.log(port);
sequelize
.sync()
.then((result) => {
    server.listen(port);
    
}).catch((err) => {
    
});

