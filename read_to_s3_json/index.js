const helper    = require('./lib.js');
const validator = require('./validator.js');

//Custom path.
const params = {
  Bucket : 'cipolat-bucket', 
  Key    : 'node-test/lead.txt',
};

//Lambda function
exports.handler = (event, context, callback) => {

  //Read the file from the bucket.
  helper.getFile(params).then((data)=>{

    //Parse json content.
    let content   = data.Body.toString();
    let lean      = JSON.parse(content);

    //Create validator.
    let validation = new validator(lean);

    //Check validations.
    if (validation.validate()){

      let post = helper.createPostLean(lean);
      callback(null,post);

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