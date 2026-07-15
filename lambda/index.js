exports.handler = async () => {
  console.log("Hello from AWS Lambda deployed using CDK and GitHub Actions");

  return {
    statusCode: 200,
    body: "Hello from AWS Lambda deployed using CDK and GitHub Actions",
  };
};