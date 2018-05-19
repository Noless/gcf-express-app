//@flow
const gcfExpressApp = require('./index');

describe('gcf-express-app', () => {
  test('request path without trailing slash', () => {
    // req.path is url + query string i.e. /url?a=b&c=d
    // req.url is only "url" i.e. /url
    const req = { path: '', url: '' };
    const res = {};

    const app = jest.fn(req => {
      expect(req.url[0]).toEqual('/');
    });

    // $FlowFixMe
    const gcfApp = gcfExpressApp(app);

    // $FlowFixMe
    gcfApp(req, res);
    expect(app).toHaveBeenCalledWith(req, res);
  });

  test('request path with trailing slash', () => {
    // req.path is url + query string i.e. /url?a=b&c=d
    // req.url is only "url" i.e. /url
    const req = { path: '/testurl?a=b&c=d', url: '/testurl' };
    const res = {};

    const app = jest.fn(req => {
      expect(req.url).toEqual('/testurl');
    });

    // $FlowFixMe
    const gcfApp = gcfExpressApp(app);

    // $FlowFixMe
    gcfApp(req, res);
    expect(app).toHaveBeenCalledWith(req, res);
  });
});
