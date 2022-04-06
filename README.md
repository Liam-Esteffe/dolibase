# Dolibase
## _The best Dolibarr Database Manager_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) [![CodeFactor](https://www.codefactor.io/repository/github/zerojnr/dolibase/badge)](https://www.codefactor.io/repository/github/zerojnr/dolibase)

Dolibase is an virtual Database who contain all your clients in subbase.
It's an virtual manager to manage dolibarr data.

- Manage your data and users
- Have a see on all your base
- ✨Have a powerfull Dolibarr

## Features

- Upload, Edit, Delete Users and Database
- Launch Crons save on database 
- Get Database Backup
- Link - unlink clients and base (in progress)

The main problem with dolibarr for me it's the REST API so, we change it to this data system manager.

## Tech

Dillinger uses a number of open source projects to work properly:

- [Angular] - Frontend Web!
- [NestJS] - Use to build reactive and powerfull Backend 
- [TailwindCss] - Markdown parser done right. Fast and easy to extend.
- [MongoDb-Mongoose] - Database management
- [Node] - evented I/O for the backend
- [Docker] - to publish docker image

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd server
npm i
npm run start:dev
cd ../client
npm i
npm run start
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```
## Development

Want to contribute? Great!

Fork / clone this repo and install all depencies
Run the server and the client
You can code !
Open your favorite Terminal and run these commands.
First Tab:

```sh
cd client
npm run tests
```

Second Tab:

```sh
cd server
npm run tests
```
if all tests passed you are good to code !

## Docker

Dolibase is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dolibase
docker build -t <image>
```

This will create the dolibase image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dolibase.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dolibase <youruser>/dolibase:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com)

   [Docker]: <https://docker.com>
   [Node]: <http://nodejs.org>
   [MongoDb-Mongoose]: <https://www.mongodb.com/fr-fr>
   [TailwindCss]: <http://tailwindcss.com>
   [NestJS]: <http://nestjs.com>
   [Angular]: <http://angular.io>
