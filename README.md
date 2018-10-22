# Nodejs-Lambda-Practice
Examples of using nodejs in AWS Lambda functions.

### List of examples:
- write_to_s3:

  Example of a lambda function that create a file in a S3 bucket, I have used this link to fix problems with the roles: 
  https://faragta.com/aws-iam/create-lambda-role-to-access-s3.html
  
- read_to_s3:

  Example of a lambda function, that read a s3 file in a s3 bucket, an output the content in the stdout.
  I have used this site to download csv example files: https://www.sample-videos.com/download-sample-csv.php
  
- read_to_s3_json:

  Example of a lambda function, that read a s3 file from a bucket, and validate the format of the json data into the file.
  
 - log_cloudWatch:

Example loggin to cloudwatch and creating a custom metrics.
