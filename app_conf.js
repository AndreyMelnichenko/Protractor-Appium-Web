'use strict';

let config = require('./browser_conf.js'),
	_ = require('underscore'),
	appPath = require('./platform.js').appPath();

config.config.specs = ['app_spec.js'];
config.config.capabilities = _.extend(config.config.capabilities, {
		//directConnect: false,
		app: appPath,
		autoWebviewTimeout: 20000,
		newCommandTimeout: 300000,
		//autoWebview: true,
		//fulReset: true,
	 	'appium-version': '1.9',
		//deviceReadyTimeout: 10,
		browserName: '',
		appPackage: 'io.selendroid.testapp',
		appActivity: '.HomeScreenActivity'
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
