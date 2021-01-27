// Import required AWS SDK clients and commands for Node.js
const {
    S3Client,
    PutObjectCommand,
    CreateBucketCommand
  } = require("@aws-sdk/client-s3");
  
  // Set the AWS region
  const REGION = "ap-notheast-2"; 
  
  // Set the bucket parameters
  const bucketName = "hbn-sksong-test";
  const bucketParams = { Bucket: bucketName };
  
  // Create name for uploaded object key
  const keyName = "hello_world.txt";
  const objectParams = { Bucket: bucketName, Key: keyName, Body: "Hello World!" };
  
  // Create an S3 client service object
  const s3 = new S3Client({ region: REGION });
  
  const run = async () => {
    // Create S3 bucket
    try {
      const data = await s3.send(new CreateBucketCommand(bucketParams));
      console.log("Success. Bucket created.");
    } catch (err) {
      console.log("Error", err);
    }
    try {
      const results = await s3.send(new PutObjectCommand(objectParams));
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
    } catch (err) {
      console.log("Error", err);
    }
  };
  run();