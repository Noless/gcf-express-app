# gcf-express-app 

[`gcf-express-app`](https://www.npmjs.com/package/gcf-express-app) helps you run [`express`](https://expressjs.com) apps on Google Cloud Functions (GCF) without Firebase!

[![CircleCI](https://circleci.com/gh/Noless/gcf-express-app.svg?style=svg)](https://circleci.com/gh/Noless/gcf-express-app)
[![Coverage Status](https://coveralls.io/repos/github/Noless/gcf-express-app/badge.svg?branch=add_coveralls)](https://coveralls.io/github/Noless/gcf-express-app?branch=add_coveralls)
[![MIT License](https://img.shields.io/npm/l/gcf-express-app.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![version](https://img.shields.io/npm/v/gcf-express-app.svg?style=flat-square)](http://npm.im/gcf-express-app)

## Example

Edit `index.js`:

~~~js
const gcfExpressApp = require('gcf-express-app')
const express = require('express')

const app = express()
app.get('/', (req, res) => res.send('Yup. I\'m alive.'))

exports.testExpressApp = gcfExpressApp(app)
~~~

And then:

~~~ bash
$ gcloud beta functions deploy testExpressApp --trigger-http
~~~

Test it:
~~~ bash
$ curl https://<YOUR_PROJECT>.cloudfunctions.net/testExpressApp
~~~

Cleanup:
~~~ bash
$ gcloud beta functions delete testExpressApp
~~~

The [`example`](https://github.com/noless/gcf-express-app/tree/master/example)
directory is a ready-to-deploy sample function that uses
[`gcf-express-app`](https://www.npmjs.com/package/gcf-express-app) 
and deploys an express app on GCF.

## Why 

We simply wanted to run express apps on GCF without using Firebase functions.

Simply doing:

~~~js
const app = express()
[...]
exports.testExpressApp = app
~~~

Actually works. But then there's a problem with a trailing slash.

## License

MIT
