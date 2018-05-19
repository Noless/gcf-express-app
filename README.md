# gcf-express-app 

Run Express Apps on Google Cloud Functions (GCF) without Firebase!

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

The `example` directory is a ready-to-deploy sample function that uses
`gcf-express-app` and deploys an express app on GCF.

## Why 

I simply wanted to run express apps on GCF without using Firebase functions.

Simply doing:

~~~js
const app = express()
[...]
exports.testExpressApp = app
~~~

Actually works. But then there's a problem with a trailing slash.

## License

WTFPL
