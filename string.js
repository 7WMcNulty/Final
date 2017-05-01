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

}


exports.containsNumerical =function(str){

}


exports.containsSpecial =function(str){

}
exports.containsUpper("Test");
