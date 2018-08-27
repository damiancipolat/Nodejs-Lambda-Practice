const AWS = require('aws-sdk');
const s3  = new AWS.S3();

//Custom path.
const params = {
  Bucket : 'cipolat-bucket', 
  Key    : 'node-test/lead.txt'
};

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

//Validate format if exists the minimum data.
const validateLead = (lean)=>{

  return ((lean.email)&&(lean.firstName)&&(lean.lastName)&&(lean.product)&&(lean.profileId));

}

//Create post data.
const createPostLean = (lean)=>{

  return lean

}

//Lambda function
exports.handler = (event, context, callback) => {

  //Read the file from the bucket.
  getFile(params).then((data)=>{

    //Parse json content.
    let content = data.Body.toString();
    let lean    = JSON.parse(content);

    if (validateLead(lean)){

      let post = createPostLean(lean);
      callback(null,data.Body.toString());

      console.log('ready to transfer',post);

    } else {

      console.log('Error in posta data');
      callback(null,data.Body.toString());

    }

  }).catch((err)=>{

    console.log('File loaded error!');
    callback(err,null);

  });

}