# We.js example and skeleton project

> Live example: http://wejs.org/

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

## Example config

```js
// file config/local.js
module.exports = {
  appName: 'We.js',

  fileUploadPath: 'files/uploads/files',
  imageUploadPath: 'files/uploads/images',

  wejs: {
    providers: {
      wembed: 'http://wembed.wejs.org',
      accounts: 'http://localhost',
      api: 'http://localhost',
      cookieDomain: '.localhost'
    }
  },

  port: process.env.PORT || 1430,

  /**
   * Client side configs
   * @type {Object}
   */
  clientside: {
    // change to true to force browser refresh javascript cache automaticaly
    // use it only for development
    forceBrowserCacheRefresh: true,

    enableLiveReload: true,

    // we.js client side logs
    log: {
      events: false,
      hooks: false
    },
    publicVars: {
      oauthNetworkServiceName: 'network'
    }
  },

  environment: process.env.NODE_ENV || 'development',
  // /environment: process.env.NODE_ENV || 'production',
  hostname: 'http://localhost',
  //host: 'http://localhost',

  site: {
    // if true send a activation email for new
    // accounts and only alow users login after account activation
    requireAccountActivation: true
  },
  //environment: 'production',

  email: {
    fromName: 'We.js example',
    siteEmail: 'contato@wejs.org',
    defaultService: 'Mandrill',
    services: {
      Mandrill: {
        service: 'Mandrill',
        type: 'SMTP',
        host: 'smtp.mandrillapp.com',
        port: 587,
        auth: {
          user: 'your-mandrill-email',
          pass: 'your-mandrill-pass'
        }
      },
      gmail: {
        service: 'gmail',
        type: 'SMTP',
        auth: {
          user: 'your-email',
          pass: 'your-password'
        }
      }
    }
  },

  connections: {
    mysql: {
      module   : 'sails-mysql',
      host     : 'localhost',
      port     : 3306,
      user     : 'your-db-username',
      password : 'your-db-pasword',
      database : 'your-db-name'
    }
  },

  models: {
    migrate: 'alter',
    connection: 'mysql'
  },

  session: {
    adapter: 'redis'
  }
};
```



## Links

> * Team: https://github.com/orgs/wejs/people
> * Contributors: https://github.com/wejs/we/graphs/contributors

## Copyright and license

Copyright 2013-2014 Alberto Souza <alberto.souza.dev@gmail.com> and [contributors](https://github.com/wejs/we/graphs/contributors) , under [the MIT license](LICENSE).
