const AWS = require('aws-sdk');
const s3  = new AWS.S3();

//Custom path.
const params = {
  Bucket : 'cipolat-bucket', 
  Prefix : 'node-test/'
};

//List the buckets files.
const listFiles = ()=>{

  return new Promise((resolve,reject)=>{

    s3.listObjectsV2 (params, (err, data) => {

      if (err)
        reject(err);
      else
        resolve(data);

    });

  });

}

//Validate format if exists the minimum data.
const validateLead = (lean)=>{

  return ((lean.id==undefined)&&(lean.email)&&(lean.firstName)&&(lean.lastName)&&(lean.product)&&(lean.profileId));

}


//Create post data.
const createPostLean = (lean)=>{

  return lean;

}

//Lambda function
exports.handler = (event, context, callback) => {

    //List files.
    listFiles().then((list)=>{

      callback(null,list);

    }).catch((err)=>{

      callback(err,null);

    });

}