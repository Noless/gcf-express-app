# gcf-express-app-test

A ready-to-deploy sample function that uses gcf-express-app and
deploys an express app on GCF.

Simply do this:  

~~~ bash
$ gcloud beta functions deploy testExpressApp --trigger-http
~~~

Cleanup:
~~~ bash
$ gcloud beta functions delete testExpressApp
~~~



