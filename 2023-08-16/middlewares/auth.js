import fs from 'fs/promises';
import * as jose from 'jose';

export default async (req, resp, next) => {
  if (req.url === '/api/users' || req.url === '/api/login') {
    next();
    return;
  }

  const { authorization } = req.headers;

  if (!authorization) {
    resp.status(401);
    const message = 'Authorization header is missing';
    resp.json({ message });
    return;
  }

  const [authType, authToken] = authorization.split(' ');
  if (authType !== 'Bearer') {
    resp.status(401);
    const message = 'Authorization header is invalid';
    resp.json({ message });
    return;
  }



  
  try {
    // check if the token is valid according to the SECRET key stored in .cred file
    const secret = await fs.readFile('.cred');
    const { payload } = await jose.jwtVerify(authToken, secret);
    req.loggedInUser = payload; // actual target handler can use this information
    resp.header('loggedInUserEmail', payload.email);
    resp.header('loggedInUserName', payload.name);
    resp.header('loggedInUserId', payload._id);
    next();
  } catch (error) {
    resp.status(401);
    const message = 'Authorization token is invalid';
    resp.json({ message, error });
    return;
  }
};
