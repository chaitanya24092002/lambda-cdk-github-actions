#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LambdaCdkGithubActionsStack } from '../lib/lambda-cdk-github-actions-stack';

const app = new cdk.App();

new LambdaCdkGithubActionsStack(app, 'LambdaCdkGithubActionsStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});