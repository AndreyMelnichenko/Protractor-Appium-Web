var isWin = process.platform;
var currentPath = process.cwd();
console.log(isWin+" "+currentPath);
console.log(__dirname);
const fs = require('fs');

function randomInt(low, high) {
	return Math.floor(Math.random() * (high - low) + low)
}

var files = fs.readdirSync(currentPath);
/*
	.forEach(file => {
		console.log(file);
	})
*/
appName = 'test-app.apk';
//sizeMyFile = fs.statSync(currentPath+"\\"+appName).size;
console.log(fs.statSync(currentPath+"\\"+appName).size);
console.log(typeof (currentPath+"\\"+appName));

