const express = require('express');
const ApolloServer = require('apollo-server-express').ApolloServer;
const schema = require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors');
const config= require('./config/development.js')

class Server {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.initApolloServer();
    this.startExpressServer();
  }

  initApolloServer() {
    let apolloServer = new ApolloServer({
      typeDefs: schema,
      resolvers: resolvers,
      context: {
        token: 'dummytoken'
      }
    });
    apolloServer.applyMiddleware({
      app: this.app,
      path: '/graphql'
    });
  }

  startExpressServer() {
    this.app.listen(config.port, (err, data,data1) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(`Server is listening on http://localhost:4000`);
    });
  }
}

new Server();