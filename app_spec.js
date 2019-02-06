var driver = require('./app_conf.js');
describe('angularjs homepage', function () {
	fit('should add a todo', function(callback) {
		//driver.get( '' );
		callback();
		console.log("Hello PROTRACTOR+Appium+WebView");
	});

	it('should have a title', function() {
		console.log("Hello PROTRACTOR+Appium+WebView");
        expect(2 + 2).toEqual(4);
    });
});
