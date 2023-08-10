import mysql from 'mysql';

var connection = mysql.createConnection({
  host: 'www.db4free.net',
  user: 'vinodkumar',
  password: 'Welcome#123',
  database: 'vinodkumar',
});

connection.connect();

export const addNewCustomer = (req, resp) => {
  const newCustomer = req.body;

  let sql =
    'insert into customers (first_name, last_name, gender, email, phone, address, city, state, country, avatar) values (?,?,?,?,?,?,?,?,?,?)';

  connection.beginTransaction((error) => {
    if (error) {
      //resp.status(500);
      resp.json({ message: 'error while starting a new transaction' });
      return;
    }

    connection.query(sql, Object.values(newCustomer), (error, results) => {
      if (error) {
        // resp.status(500);
        console.log(error);
        resp.json({ message: error.sqlMessage });
        return;
      }

      connection.commit((error) => {
        if (error) {
          console.log(error);
          resp.json({ message: error.sqlMessage });
          return;
        }
        console.log(results);
        // resp.status(201);
        resp.json(results);
      });
    });
  });
};

export const getOneCustomer = (req, resp) => {
  let { id } = req.params;
  let sql = 'select * from customers where id = ?';

  connection.query(sql, [id], (error, results) => {
    if (error) {
      resp.json({ message: 'there was an error while getting all customers' });
    } else {
      if (results.length === 0) {
        resp.status(404);
        resp.json({ message: `no data found for id ${id}` });
      } else {
        resp.json(results[0]);
      }
    }
  });
};

export const getAllCustomers = (req, resp) => {
  connection.query('select * from customers', (error, results) => {
    if (error) {
      let err = {
        message: 'there was an error while getting all customers',
      };
      resp.json(err);
    } else {
      resp.json(results);
    }
  });
};
