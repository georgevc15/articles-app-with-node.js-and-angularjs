# Deploying node.js on AWS

We use one server approach

1. change the output path within angular.json to "outputPath": "backend/angular", this will create a folder named angular within the backend folder with the files needed to run angular
2. run ng build 
3. zip the content of the backend folder
4. upload the content of the dist file using Amazon S3
