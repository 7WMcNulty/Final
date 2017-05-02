const readline = require('readline');
const testString  =require('./string');


function getString(){
    let password = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    password.question("What would you like to set as your password?", function(str){
        let passesAllChecks = true;

        //Conditional Statements here.
        if(testString.checkLength(str) == false){
          passesAllChecks = false;
        }
        if(testString.containsUpper(str) == false){
          passesAllChecks = false;
        }
        if(testString.containsLower(str) == false){
          passesAllChecks = false;
        }
        if(testString.containsNumerical(str) == false){
          passesAllChecks = false;
        }
        if(testString.containsSpecial(str) == false){
          passesAllChecks = false;
        }

        if(!passesAllChecks){
            console.log("\nTry again\n");
            password.close();
            getString();
        }
        else{
            console.log("\nGreat password. Bye bye now...\n");
            password.close();
        }
    });
}

getString();
