#!/bin/bash
# You need to have the AWS CLI installed and your environment set up to connect to a AWS account

npm run bundle
aws s3 sync ./vr/build/ s3://high-vive
aws s3 sync ./static_assets/ s3://high-vive/static_assets/
