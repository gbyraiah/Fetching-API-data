const userObj = require('./user');
const emailObj = require('./email');
const dataObj = require('./sample' );
const dataObj1 = require('./sample1');

const resolvers = {
  Query: {
    user: userObj.user,
    users: userObj.users,
    email: emailObj.email,
    emails: emailObj.emails,
    data: dataObj.getdata,
    data1: dataObj1.getdata,
    
  },
  User: {
    emails: emailObj.getUserEmails
  }
};

module.exports = resolvers;