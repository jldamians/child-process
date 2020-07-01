const cp = require('child_process');

const names = [
    'jose', 
    'alberto', 
    'luis', 
    'carlos', 
    'natty', 
    'sofia'
];

const child = cp.fork('forkchild.js', names, { cwd: __dirname });

child.on('message', (data) => {
    console.log('PARENT got message:', data);
    child.send({ name: 'jldamians', age: 30, city: 'pucallpa' });
});

child.on('exit', (code) => {
    console.log(`child terminated!`);
});

/*let interval = setInterval(() => {
    child.send({ name: 'jldamians', age: 30, city: 'pucallpa' });
}, 1000);*/

setTimeout(() => {
    //clearInterval(interval);

    // ref: https://nodejs.org/api/child_process.html#child_process_subprocess_kill_signal

    child.kill();
    //child.kill(2);
    //child.kill('SIGHUP');
}, 5500);