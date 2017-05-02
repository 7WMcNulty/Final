var exports = module.exports = {};

function PasswordMessage(m){
  this.name = "Password Message";
  this.message = m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode>=min && unicode<=max){
      return true;
    }
    else{
      return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  let hasUpper = false;
  try{
    for(let i=0; i<str.length; i++){
      hasUpper = inRange(str[i],65,90);
      if(hasUpper == true){
        break;
      }
    }
  if(hasUpper == true){
      throw new PasswordMessage("Has uppercase character");
    }
    else{
      throw new PasswordMessage("Doesn't have uppercase character");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasUpper;
  }
}


exports.containsLower =function(str){
  let hasLower = false;
  try{
    for(let i=0; i<str.length; i++){
      hasLower = inRange(str[i],97,122);
      if(hasLower == true){
        break;
      }
    }
  if(hasLower == true){
      throw new PasswordMessage("Has lowercase character");
    }
    else{
      throw new PasswordMessage("Doesn't have lowercase character");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasLower;
  }
}


exports.containsNumerical =function(str){
  let hasNum = false;
  try{
    for(let i=0; i<str.length; i++){
      hasNum = inRange(str[i],48,57);
      if(hasNum == true){
        break;
      }
    }
  if(hasNum == true){
      throw new PasswordMessage("Has numerical character");
    }
    else{
      throw new PasswordMessage("Doesn't have numerical character");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasNum;
  }
}


exports.containsSpecial = function(str){
  let hasSpecial = false;
  let special = [33,64,35,36,37,94,38,42];
  try{
    for(let i=0; i<str.length; i++){
      for(let j=0; j<special.length; j++){
        hasSpecial = inRange(str[i],special[j],special[j]);
        if(hasSpecial == true){
          break;
        }
      }
    }
    if(hasSpecial == true){
      throw new PasswordMessage("Has a special character");
    }
    else{
      throw new PasswordMessage("Doesn't have a special character");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasSpecial;
  }
}
