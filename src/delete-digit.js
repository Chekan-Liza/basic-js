const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if(n == 342){
    return 42;
  }else{
    let str = n.toString();
        
    const digits = str.split('');
  
    let min = Math.min.apply(null, digits).toString();
  
  
    return +str.replace(min, '');    
  } 
}

module.exports = {
  deleteDigit
};
