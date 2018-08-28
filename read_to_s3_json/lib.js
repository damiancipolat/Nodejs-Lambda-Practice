const AWS = require('aws-sdk');
const s3  = new AWS.S3();

//Read file from bucket.
const getFile = (params)=>{

  return new Promise((resolve,reject)=>{

    try{

      //Get the s3 object from the bucket.
      s3.getObject(params,(err, data)=>{

        if (err)
          reject(err);
        else
          resolve(data);

      });

    } catch(err){
      reject(err);
    }

  });
  
}

//List the buckets files.
const listFiles = (params)=>{

  return new Promise((resolve,reject)=>{

    s3.listObjectsV2 (params, (err, data) => {

      if (err)
        reject(err);
      else
        resolve (data);

    });

  });

}

//Create post data.
const createPostLean = (lean)=>{

  let companyName = ((lean.company==null)||(lean.company==undefined))?`The ${lean.firstName} ${lean.lastName} Household`:lean.company;

  return {
    "firstName" : lean.firstName,
    "lastName"  : lean.lastName,
    "company"   : companyName,
    "email"     : lean.email,
    "property": {
      "address": {
        "city" : lean.property.address.city,
        "state": lean.property.address.state,
        "zip"  : lean.property.address.zip
      }
    },
    "product"  : lean.property.product,
    "profileId": lean.property.profileId
  };

}


module.exports.validator      = leanValidator;
module.exports.getFile        = getFile;
module.exports.listFiles      = listFiles;
module.exports.createPostLean = createPostLean;