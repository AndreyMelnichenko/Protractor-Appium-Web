var driver = require('./app_conf.js');
describe('angularjs homepage', function () {
	it('should add a todo', function(callback) {
		driver.get( '' );
		callback();
		console.log("Hello PROTRACTOR+Appium+WebView");
	})
});

