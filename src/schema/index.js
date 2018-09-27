const gql = require('apollo-server-express').gql;

const user = require('./user');
const email = require('./email');
const data = require('./data');
const data1 = require('./data1');


const schema = gql`
  type Query {
    user(id: Int, username: String): User
    users: [User]

    email(id: Int): Email
    emails: [Email]
    data: Data
    data1: Data1
    
  
  }

  ${user}
  ${email}
  ${data}
  ${data1}

`;

module.exports = schema;
