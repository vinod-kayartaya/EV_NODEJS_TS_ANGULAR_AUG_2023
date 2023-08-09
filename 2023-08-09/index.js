import express from 'express';
import bodyParser from 'body-parser';

import {
  addNewCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerData,
} from './service/customer-service.js';

const app = express();
const port = 8080;
app.use(bodyParser.json()); // bodyParser.json() returns a middleware function

app.get('/', (req, resp) => resp.send('Welcome home'));
app.get('/api/customers', getAllCustomers);
app.get('/api/customers/:id', getCustomerById);
app.post('/api/customers', addNewCustomer);
app.patch('/api/customers/:id', updateCustomerData);

app.listen(port, () => console.log(`server started at port ${port}`));
console.log(`starting the express based application...`);
