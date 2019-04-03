
class Cli {

    loadCommands() {
        var lineReader = require('readline').createInterface({
            input: require('fs').createReadStream('./commands.txt')
        });

        lineReader.on('line', function (line) {
            console.log('Got command:', line);
        });
    }
}

module.exports = Cli;