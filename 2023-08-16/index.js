import express from 'express';
import bodyParser from 'body-parser';
import {
  addNewCustomer,
  getAllCustomers,
  getOneCustomer,
  mergeCustomerData,
} from './service/customer-service.js';
import convertEmailToLowercase from './middlewares/convert-email-to-lowercase.js';
import { loginUser, registerNewUser } from './service/user-service.js';
import auth from './middlewares/auth.js';

function mw1(req, resp, next) {
  console.log('inside mw1, before going to the handler..');
  next(); // control is transferred to the next middleware or the handler
  console.log('inside mw1, after coming from the handler');
}

const app = express();

app.use(auth)

app.use(bodyParser.json());
app.use(convertEmailToLowercase)
const port = 8080;
const baseUrl = '/api/customers';

// CREATE
app.post(baseUrl, addNewCustomer);
// READ
app.get(baseUrl, mw1, getAllCustomers);
app.get(baseUrl + '/:id', getOneCustomer);
// UPDATE
app.put(baseUrl + '/:id', (req, resp) => resp.send('not done yet..'));
app.patch(baseUrl + '/:id', mergeCustomerData);
// DELETE
app.delete(baseUrl + '/:id', (req, resp) => resp.send('not done yet..'));

// new user registration
app.post('/api/users', registerNewUser);
// existing user login
app.post('/api/login', loginUser);


app.listen(port, () =>
  console.log(
    `customer-service is now available at http://localhost:${port}${baseUrl}`
  )
);
