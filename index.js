// const { assertEqual ,check } = require('./helpers/index')
// const chai = require('chai'); 
// const expect = chai.expect;

// function add(num1, num2) {
//     if (typeof num1 === 'undefined' || typeof num2 === 'undefined') throw new Error('you must send numbers only');
//      const result = num1 + num2;
//      return result;
// };
// function multiply(num1, num2) {
//     if (typeof num1 === 'undefined' || typeof num2 === 'undefined') throw new Error('you must send numbers only');
//      const result = num1 * num2;
//      return result;
// };
// check('test add successfully', () => {
//     const num1 = 1;
//     const num2 = 4;
//     const expectedResult = 5;
//     const actualResult = add(num1 , num2);
//     expect(actualResult).to.equal(expectedResult);

// })
// module.exports = { add , multiply };
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const startDB = require('./helpers/DB');
const userRoutes = require('./routes/user')
fastify.register(startDB);
// Declare a route
// fastify.get('/', function handler (request, reply) {
//   reply.send({ hello: 'world' })
// })
userRoutes.forEach((route)=>{
    fastify.route(route);
    })
// Run the server!
fastify.listen({ port: 3019 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})