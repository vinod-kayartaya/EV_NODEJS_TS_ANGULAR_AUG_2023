import express from 'express';
import bodyParser from 'body-parser';
import {
  addNewCustomer,
  getAllCustomers,
  getOneCustomer,
  mergeCustomerData,
} from './service/customer-service.js';

const app = express();
app.use(bodyParser.json());
const port = 8080;
const baseUrl = '/api/customers';

// CREATE
app.post(baseUrl, addNewCustomer);

// READ
app.get(baseUrl, getAllCustomers);
app.get(baseUrl + '/:id', getOneCustomer);

// UPDATE
app.put(baseUrl + '/:id', (req, resp) => resp.send('not done yet..'));
app.patch(baseUrl + '/:id', mergeCustomerData);

// DELETE
app.delete(baseUrl + '/:id', (req, resp) => resp.send('not done yet..'));

app.listen(port, () =>
  console.log(
    `customer-service is now available at http://localhost:${port}${baseUrl}`
  )
);
