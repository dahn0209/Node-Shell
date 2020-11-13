

const pwd = require('./pwd');

const fs = require('fs');

const ls = require('./ls');



// process.stdin.on('data', (data)=>{
//     const cmd=data.toString().trim();
//     if(cmd === 'pwd'){
//       process.stdout.write(process.cwd());
//     }
//     process.stdout.write('\nprompt > ');

// });

process.stdin.on('data', (data) => {
  process.stdout.write('prompt >')
  const cmd = data.toString().trim();
  if(cmd === 'pwd'){
    pwd.pwd();
  }
  if(cmd === 'ls'){
    ls.ls();
  }
})