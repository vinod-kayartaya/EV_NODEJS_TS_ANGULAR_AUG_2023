export default function (req, resp) {
  const cookie = req.headers.cookie;
  console.log(`client made a ${req.method} request to the path "${req.url}"`);
  console.log(req.headers);
  console.log(cookie);
  console.log(req.body);

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
      resp.end('this app is developed by Vinod Kumar Kayartaya');
      break;
    case '/contact-us':
      resp.end('You may contact us at vinod@vinod.co');
      break;
    default:
      resp.statusCode = 404;
      resp.statusMessage = 'page not found';
      resp.end('OOPS! page not found');
  }
}
