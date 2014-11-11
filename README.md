# We.js project example and skeleton project

> Live example: http://wejs.org/

[![Build Status](https://travis-ci.org/wejs/we-example.svg?branch=master)](https://travis-ci.org/wejs/we-example)
[![Dependency Status](https://david-dm.org/wejs/we-example.png)](https://david-dm.org/wejs/we-example)

## Requirements

 - Redis database ( for session )
 - Mysql database ( for data )
 - node.js
 - npm

## How to install

```sh
// clone the skeleton
git clone https://github.com/wejs/we-example.git we-project
// enter in folder
cd we-project
// install packages
npm install && bower install
// run for development
npm start
```

##How to build

```sh
// install packages
npm install && bower install
// generate prod build
grunt build
// start server as prod env
node . --prod
```

## CLi scripts

#### Reset database

> node bin/resetDB.js

#### Create example data

> node bin/create-stub-data.js



## Example config

> See config/local.example file and rename it to local.js



## Links

> * Team: https://github.com/orgs/wejs/people
> * Contributors: https://github.com/wejs/we/graphs/contributors

## Copyright and license

Copyright 2013-2014 Alberto Souza <alberto.souza.dev@gmail.com> and [contributors](https://github.com/wejs/we/graphs/contributors) , under [the MIT license](LICENSE).
