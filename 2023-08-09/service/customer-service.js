const customers = [
  {
    id: 1,
    name: 'Vinod Kumar',
    email: 'vinod@vinod.co',
    phone: '9731424784',
    city: 'Bangalore',
  },
  {
    id: 5,
    name: 'Vinod Kumar',
    email: 'vinod@example.co',
    phone: '9700424784',
    city: 'Delhi',
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    email: 'ravi@xmpl.com',
    phone: '9731420001',
    city: 'Hassan',
  },
  {
    id: 3,
    name: 'Shyam Sundar',
    email: 'shyam@xmpl.com',
    phone: '9731420010',
    city: 'Bangalore',
  },
  {
    id: 4,
    name: 'Srinivas',
    email: 'srini@xmpl.com',
    phone: '9731420012',
    city: 'Mysore',
  },
];

export const getCustomerById = (req, resp) => {
  let { id } = req.params; // const id = req.params.id;
  id = parseInt(id);

  let c1 = customers.find((c) => c.id === id);

  if (c1) {
    resp.json(c1);
  } else {
    resp.status(404);
    resp.json({ message: `no data found for id ${id}` });
  }
};

export const getAllCustomers = (req, resp) => {
  console.log('req.query', req.query);

  if ('city' in req.query) {
    let data = customers.filter((c) => c.city === req.query.city);
    resp.json(data);
    return;
  }
  resp.json(customers);
  // resp.header('content-type', 'application/json')
  // resp.write(JSON.stringify(customers))
  // resp.end()
};

// add a new customer
export const addNewCustomer = (req, resp) => {
  // req has the payload representing the new customer to be added
  // req.body represents the payload
  const c1 = req.body;

  // do validation
  const requiredFields = ['name', 'email', 'phone'];
  const missingFields = [];
  requiredFields.forEach((f) => {
    if (!(f in c1)) {
      missingFields.push(f);
    }
  });

  if (missingFields.length > 0) {
    let err = {};
    err.message = 'missing fields: ' + missingFields;
    resp.status(400);
    resp.json(err);
    return;
  }

  let c2 = customers.find((c) => c.email === c1.email);
  if (c2) {
    let err = {};
    err.message = 'duplicate email ' + c1.email;
    resp.status(400);
    resp.json(err);
    return;
  }

  c2 = customers.find((c) => c.phone === c1.phone);
  if (c2) {
    let err = {};
    err.message = 'duplicate phone ' + c1.phone;
    resp.status(400);
    resp.json(err);
    return;
  }

  c1.id =
    customers.length === 0 ? 1 : 1 + Math.max(...customers.map((c) => c.id));
  customers.push(c1);

  resp.status(201);
  resp.json(c1);
};

export const updateCustomerData = (req, resp) => {
  let { id } = req.params;
  id = parseInt(id);
  let c1 = req.body;

  let index = customers.findIndex((c) => c.id === id);
  if (index === -1) {
    resp.status(404);
    resp.json({ message: 'no data found for id ' + id });
    return;
  }
  let c2 = customers[index];
  c2 = { ...c2, ...c1 };
  customers[index] = c2;
  resp.json(c2);
};
