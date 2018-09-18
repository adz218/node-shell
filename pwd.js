function processPWD(command) {
    if (command === 'pwd'){
        process.stdout.write(process.cwd())
    }
}
module.exports = processPWD;