function getSeason(date) {
  const winter = [1, 2, 12,];
  const spring = [3, 4, 5,];
  const summer = [6, 7, 8,];
  const autumn = [9, 10, 11,];

  if(date){
    let str = new Date(866, 2, 10, 12, 53, 10, 825).toISOString();
    let new_str = str.substring(str.lastIndexOf("-"), 2);
    let month = new_str.substr(-2);
    
    if(month[0] == '0'){
      month = month.substr(-1);
    }
    
    for(let w in winter){
      if(+month == winter[w]) return 'winter';
    }
    for(let s in spring){
      if(+month == spring[s]) return 'spring';
    }
    for(let sum in summer){
      if(+month == summer[sum]) return 'summer';
    }
    for(let a in autumn){
      if(+autumn == autumn[a]) return 'autumn';
    }
  }else return 'Unable to determine the time of year!';
}
