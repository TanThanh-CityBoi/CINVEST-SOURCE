#!/bin/bash

cat<<_EOC_
PORT=4000
APP_URI=${apphost}
API_URI=${api_uri}
LOGIC_URI=${logichost}
COGNITO_POOLID_ADMIN=${cognito_poolid_admin}
COGNITO_REGION=ap-northeast-1
COGNITO_CLIENTID_ADMIN=${cognito_clientid}
COGNITO_CLIENTSECRET_ADMIN=${cognito_clientsecret}
AWS_ACCESS_KEY_ID=${api_access_key_id}
AWS_SECRET_ACCESS_KEY=${api_secret_access_key}
AWS_BUCKET_NAME=${s3_bucket_name}
UPLOAD_FOLDER_NAME=${upload_folder_name}
REDIS_URL=redis://${redis_url}
TYPEORM_HOST=${dbhost}
TYPEORM_USERNAME=${dbuser}
TYPEORM_PASSWORD=${dbpassword}
TYPEORM_DATABASE=${dbname}
TYPEORM_PORT=3306
LOGIC_SECRECT_KEY=${logSecrectKey}
ENCRYPT_KEY=${encryptKey}

JWT_SECRET=${jwtsecret}
INSTANCE_ID_ALLOW_RUN_JOB=${ec2Instance}

AUTH_SERVER_URI=${decodeWalletUri}
AUTH_SERVER_KEY=${decodeWalletKey}
AUTH_SERVER_DOMAIN=${authServerDomain}


# The following may be changed if needed

TYPEORM_CONNECTION=mysql
TYPEORM_MIGRATIONS_RUN=true
TYPEORM_LOGGING=false
LOG_QUEUE=true
LOG_REQUEST=true

# In production, add the following
NODE_ENV=production
TYPEORM_MIGRATIONS=dist/migration/*.js
TYPEORM_ENTITIES=dist/entities/*.js
_EOC_

