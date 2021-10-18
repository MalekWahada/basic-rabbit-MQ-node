## DESCRIPTION
This is a simple asnychronous job manager app, built with node to illustarte how [Rabbit-MQ](https://www.rabbitmq.com/definitions.html) queuing system works.


## PREREQUISITES
- Make sure that you have an installed node package management system like [yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://nodejs.org/en/download/package-manager/).

- Install [Docker](https://docs.docker.com/get-docker/) on your machine.


## INSTALLATION
- Clone the project repo into your local machine.

- Install dependencies by running: `yarn insall` or `npm install`.

- Start a Rabbit-MQ docker container by runnning `docker run --name  rabbitmq-mlk -p 5672:5672 rabbitmq`

- create a `.env.local` and copy the `.env` content into it, then specify this environment value:
    ```
    SERVER_URL=amqp://localhost:5672
    ```

- Start the node server `npm start` or `yarn start` and check the logs.


---
**NOTES**

Please check the `publisher.js` and the `consumer.js` files to have a better understanding on how queuing works.

---