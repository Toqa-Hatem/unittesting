// const check = (message, callbackFn) =>{
//     try {
//         callbackFn();
//         console.log(`${message} passed`)
//     } catch (error){
//         console.error(`${message} failed, ${error.message}`);
//     }
// }
// const assertEqual =(result1, result2)=>{
//     if(result1 === result2) return true;
//     else throw new Error(`expected ${result1} to be equal ${result2}`);
// }
// module.exports ={
//     assertEqual,
//     check
// }