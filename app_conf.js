'use strict'
var config = require('./browser_conf.js');
var _ = require('underscore');
const appName = 'test-app.apk';
var currentPath = process.cwd();

config.config.specs = ['app_spec.js'];
config.config.capabilities = _.extend(config.config.capabilities, {
		//directConnect: false,
		app: currentPath + "\\" + appName,
		autoWebviewTimeout: 20000,
		newCommandTimeout: 300000,
		autoWebview: true,
		//fulReset: true,
	 	'appium-version': '1.9',
		//deviceReadyTimeout: 10,
		browserName: ''
});
config.config = _.extend(config.config, {
	onPrepare: function () {
		var wd = require('wd'),
			protractor = require('protractor'),
			wdBridge = require('wd-bridge')(protractor, wd);
		wdBridge.initFromProtractor(exports.config);
	}
	// var extendedWebdriver = require('webdriver-js-extender').extend(webdriver);
	// extendedWebdriver.setNetworkConnection(5);
})

exports.config = config.config;
