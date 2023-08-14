import { MongoClient } from 'mongodb';
//import bcrypt from 'bcrypt';
import * as jose from 'jose';
import fs from 'fs/promises';

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'vindb';
const collectionName = 'users';

export const loginUser = async (req, resp) => {
  if (!('email' in req.body) || !('password' in req.body)) {
    resp.status(400);
    const message = 'email/password missing';
    resp.json({ message });
    return;
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const users = db.collection(collectionName);
    const { email, password } = req.body;
    const user = await users.findOne({ email, password });
    if (user) {
      // login succeeded
      delete user.password;
      const claims = { ...user };
      const secret = await fs.readFile('.cred');
      const alg = 'HS256';
      const token = await new jose.SignJWT(claims)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(secret);

      resp.json({ token, ...claims });
    } else {
      const message = 'invalid email/password';
      resp.status(404);
      resp.json({ message });
    }
  } catch (reason) {
    resp.status(400);
    resp.json({
      message: 'error while logging in',
      reason,
    });
  }
};



export const registerNewUser = async (req, resp) => {
  if (
    !('name' in req.body) ||
    !('email' in req.body) ||
    !('password' in req.body)
  ) {
    resp.status(400);
    const message = 'name/email/password missing';
    resp.json({ message });
    return;
  }

  try {
    //req.body.password = await bcrypt.hash(req.body.password, 12);

    await client.connect();
    const db = client.db(dbName);
    const users = db.collection(collectionName);
    const result = await users.insertOne(req.body);
    resp.status(201);
    resp.json({
      message: 'new user registered',
      result,
    });
  } catch (reason) {
    resp.status(400);
    resp.json({
      message: 'could not register new user',
      reason,
    });
  }
};
