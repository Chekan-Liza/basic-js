const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }else{
    const letters = [];
    for(let m in members){
      if(typeof(members[m]) == 'string'){
          letters.push(members[m].trim()[0].toUpperCase());
      }
    }
  
    let team_name = letters.sort().join('');
  
    if(team_name != ''){
      return team_name;
    } else return false;
  }
}

module.exports = {
  createDreamTeam
};
