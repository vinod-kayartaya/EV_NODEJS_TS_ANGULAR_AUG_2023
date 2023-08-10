import express from 'express';
import bodyParser from 'body-parser';
import {
  addNewCustomer,
  getAllCustomers,
  getOneCustomer,
} from './service/customer-service.js';

const app = express();
app.use(bodyParser.json());
const port = 8080;

// CREATE
app.post('/api/customers', addNewCustomer);

// READ
app.get('/api/customers', getAllCustomers);
app.get('/api/customers/:id', getOneCustomer);

// UPDATE
app.put('/api/customers/:id', () => {});
app.patch('/api/customers/:id', () => {});

// DELETE
app.delete('/api/customers/:id', () => {});

app.listen(port, () => console.log(`customer-service started at port ${port}`));
