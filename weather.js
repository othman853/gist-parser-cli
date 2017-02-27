const exec = require('child_process').exec;

exec('curl http://wttr.in', (err, stdout, stderr) => console.log(stdout));
