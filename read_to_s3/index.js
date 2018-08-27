const AWS = require('aws-sdk');
const s3  = new AWS.S3();

//Lambda function
exports.handler = (event, context, callback) => {

	//Custom path.
	const params = {
		Bucket:'cipolat-bucket', 
		Key: 'node-test/small_videos.csv'
	};

	//Get the s3 object from the bucket.
	s3.getObject(params,(err, data)=>{
	  
	  if (err) 
	  	console.log(err, err.stack);
	  else{

		console.log(data);

		callback(null,data);

	  }	  	

	});  

};
