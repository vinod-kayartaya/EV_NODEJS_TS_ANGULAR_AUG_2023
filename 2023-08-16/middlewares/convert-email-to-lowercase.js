export default (req, resp, next) => {
  if ('email' in req.body) {
    req.body.email = req.body.email.toLowerCase();
  }
  next();
};
