// const it = require('ava').default;
// const chai = require('chai');
// const expect = chai.expect;
// const { add , multiply } = require('../index');
// it('test add successfully', (t) => {
//     const num1 = 1;
//     const num2 = 4;
//     const expectedResult = 5;
//     const actualResult = add(num1 , num2);
//     expect(actualResult).to.equal(expectedResult);
//     t.pass(); // l code entaha
// });
// it.only('test add throw error', (t) => {
//     const num1 = 1;
//     const err = new Error('you must send numbers only');
//     // const expectedResult = 5;
//     // const actualResult = add(num1);
//     expect(() => {add(num1)}).to.throw(Error, err.message);
//     t.pass(); // l code entaha
// });
// it('test multiply successfully', (t) => {
//     const num1 = 1;
//     const num2 = 4;
//     const expectedResult = 4;
//     const actualResult = multiply(num1 , num2);
//     expect(actualResult).to.equal(expectedResult);
//     t.pass(); 
// }); 