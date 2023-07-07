# Creating a RESTful API with Node.js


## Usage

Check out the branch you're interested in (i.e. which belongs to the video in my series you just watched), `git clone` it and thereafter run `npm install`.

## ###################### MY README

# To start

Development start with nodemon : npm run dev
Production Start : npm start

# npm packages -

    "cors":  allow cross origin
    "express": express code for rest api
    "helmet": secures your api
    "morgan":  logs on console
    "body-parser": reads data from url body json type only
    "dotenv": read .env file and access data kinda encryption
    "sql2" : sql connection package with promise function
    "multer" : to upload files - img / to read data from formdata
    "bcrypt" : to encrypt the password with no way to decrypt
    "jsonwebtoken" : to create a JWT token

"devDependencies": {
"nodemon": auto restarts server on any change detected in code file
"eslint": helps you in linting i.e. to write correct code / guide to write correct code
}

# eslint

npm install --save-dev eslint
npm init @eslint/config

## Response CODES

# for detailed info :

[https:developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses]

# Information responses

100 Continue
101 Switching Protocols
102 Processing

# Successful responses

200 : standart response for standarnt http success response
201 : success new resource creation
202 Accepted : The request has been received but not yet acted upon.
204 No Content

# Redirection messages

300 Multiple Choices

# Client error responses

400 Bad Request : the request cannot be fulfiled / bad syntax
401 Unauthorized
402 Payment Required :
403 Forbidden : forbidden / the server is refuring to respond
404 Not Found :
413 Payload Too Large
418 I'm a teapot

# Server error responses

500 Internal Server Error
502 Bad Gateway

### Learning

async & await
