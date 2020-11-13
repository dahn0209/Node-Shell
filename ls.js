
const fs = require('fs');



function ls () { 
    fs.readdir('./', 'utf8', function (err,files) {
        
        if(err){
            throw err;
    }
    else{
        process.stdout.write(files.join('\n'))
        process.stdout.write("prompt > ");
    }
  })
}
module.exports = {ls}