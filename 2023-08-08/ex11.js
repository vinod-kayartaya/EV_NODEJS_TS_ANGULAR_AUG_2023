import http from 'http';
import defaultHandler from './handlers/default-handler.js';

const server = http.createServer(defaultHandler);
const port = 1234;

server.listen(port);

console.log(`server started at port ${port}`);
