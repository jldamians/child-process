// child_process.spawn(commnad, [args], {options})

const cp = require('child_process');
const path = require('path');

//const spawn = cp.spawn('node', [path.resolve(__dirname, 'message.js')]);
const spawn = cp.spawn('node', ['message.js'], { cwd: path.resolve(__dirname, 'child') });

spawn.stdout.on('data', (data) => {
    console.log(`stdout:\n${data}`);
});

spawn.stderr.on('data', (data) => {
    console.log(`stderr:\n${data}`);
});

spawn.on('close', (code) => {
    console.log(`child process exited with code ${code}`);

    // diremos que el procesamiento se ha completado de forma satisfactoria
    // cuando el código es '0', sin embargo, cuando es diferente (generalmente 1),
    // la operación no ha sido completada
    if (code === 0) {
        console.log('the process closed correctly');
    }
});

spawn.on('error', (data) => {
    console.log(`error occured: ${data}`);
});