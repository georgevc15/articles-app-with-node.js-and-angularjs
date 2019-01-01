# Deploying node.js on AWS

We use the two app approach which means we have a separated server for both node.js and AngulaJS

1. upload backend.zip to AWS using Elastic Beanstalk
2. upload the content of the dist file using Amazon S3
