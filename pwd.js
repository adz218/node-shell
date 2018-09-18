function processPWD(command) {
    if (command === 'pwd'){
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    }
}
module.exports = processPWD;
