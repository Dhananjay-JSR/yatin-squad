/*
 * Discord Bot For Tomnikkk
 * Version 1.2.0
 * Dhananjay Senday
 */

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}
