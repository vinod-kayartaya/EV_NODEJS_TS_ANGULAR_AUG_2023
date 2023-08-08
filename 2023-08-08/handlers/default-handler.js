export default (req, resp) => {
  console.log('got a request:', req.url);

  switch (req.url) {
    case '/':
      resp.end('welcome home');
      break;
    case '/add-new-customer':
      resp.end('adding new customer...');
      break;
    case '/get-all-customers':
      resp.end('getting all customers');
      break;
    case '/about-us':
      resp.end('this app is developed by Vinod');
      break;
    case '/contact-us':
      resp.end('You may contact us at vinod@vinod.co');
      break;
    default:
      resp.end('OOPS! page not found');
  }
};
