process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const line = data.toString().trim();
    const cmd = line.split(' ')[0];
    const arg = line.split(' ')[1];
    //pwd
    require('./pwd.js')(cmd);
    //ls
    require('./ls.js')(cmd);
    // process.stdout.write('\nprompt > ');
    require('./cat.js')(cmd, arg);
});
