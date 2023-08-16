import { MongoClient, ObjectId } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'vindb';
const collectionName = 'customers';

export const mergeCustomerData = async (req, resp) => {
  try {
    const data = req.body;
    const { id } = req.params;

    await client.connect();
    const db = client.db(dbName);
    const customers = db.collection(collectionName);
    const result = await customers.findOne({ _id: new ObjectId(id) });
    if (!result) {
      resp.status(404);
      resp.json({ message: `no data found for id ${id}` });
      return;
    }

    const newData = { ...result, ...data }; // merge result and data into a single object
    await customers.findOneAndReplace({ _id: new ObjectId(id) }, newData);
    resp.json(newData);
  } catch (error) {
    resp.status(400);
    resp.json({ error });
  }
};

export const getAllCustomers = async (req, resp) => {
  console.log('getAllCustomers() called by the user', req.loggedInUser);
  try {
    let { _page = 1, _limit = 10 } = req.query;
    _page = parseInt(_page);
    _limit = parseInt(_limit);

    await client.connect();
    const db = client.db(dbName);
    const customers = db.collection(collectionName);
    const result = await customers
      .find({ userId: new ObjectId(req.loggedInUser._id) })
      .limit(_limit)
      .skip((_page - 1) * _limit)
      .toArray();
    resp.json(result);
  } catch (reason) {
    resp.status(500);
    resp.json({ reason });
  }
};

export const getOneCustomer = async (req, resp) => {
  try {
    const { id } = req.params;
    await client.connect();
    const db = client.db(dbName);
    const customers = db.collection(collectionName);
    const result = await customers.findOne({ _id: new ObjectId(id) });
    if (result) {
      if (!result.userId.equals(new ObjectId(req.loggedInUser._id))) {
        resp.status(403);
        resp.json({
          message: 'this customer is not added by the logged in user',
        });
        return;
      }

      resp.json(result);
      return;
    }
    resp.status(404);
    resp.json({ message: `no data found for id ${id}` });
  } catch (reason) {
    resp.status(500);
    resp.json({ reason });
  }
};

export const addNewCustomer = async (req, resp) => {
  let data = req.body;
  try {
    await client.connect();
    const db = client.db(dbName);
    const customers = db.collection(collectionName);
    let result;
    if (data instanceof Array) {
      data.forEach((c) => (c.userId = new ObjectId(req.loggedInUser._id)));
      result = await customers.insertMany(data);
    } else {
      data.userId = new ObjectId(req.loggedInUser._id);
      result = await customers.insertOne(data);
    }
    resp.status(201);
    resp.json({
      message: 'new customer/s added',
      result,
    });
  } catch (reason) {
    resp.status(400);
    resp.json({
      message: 'could not add new customer',
      reason,
    });
  }
};

/*
  client
    .connect()
    .then(() => client.db('vindb'))
    .then((db) => db.collection('customers'))
    .then((customers) => customers.insertOne(c1))
    .then((result) => {
      resp.status(201);
      resp.json({
        message: 'new customer added',
        insertedId: result.insertedId,
      });
    })
    .catch((reason) => {
      resp.status(400);
      resp.json({
        message: 'could not add new customer',
        reason,
      });
    });
    */
