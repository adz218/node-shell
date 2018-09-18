process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    //pwd
    require('./pwd.js')(cmd);
    process.stdout.write('\nprompt > ');
});


