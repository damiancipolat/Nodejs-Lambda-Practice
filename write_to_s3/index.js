const AWS = require('aws-sdk');
const s3 = new AWS.S3();
  
//Custom path.
const bucketName = 'cipolat-bucket';

//Lambda function
exports.handler = (event, context, callback) => {

  let content = 'This is a sample text file';
      
  let params  = {
    Bucket: bucketName, 
    Key:    bucketName+'/node-test',
    Body:   content 
  };
      
  s3.putObject(params, (err, data)=>{

    if (err)
        console.log(err)
    else
        console.log("Successfully saved object to " + bucketName + "/" + keyName);

  });

};
              