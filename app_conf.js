'use strict'
var config = require('./browser_conf.js');
var _ = require('underscore');

config.config.specs = ['app_spec.js'];
config.config.capabilities = _.extend(config.config.capabilities, {
		directConnect: true,
		app: 'C:\\wdBridge\\Protractor-Appium-Web\\test-app.apk',
		appPackage: "com.bpmonline.mobile70",
		appActivity: "com.bpmonline.mobile.MainActivity",
		newCommandTimeout: 140,
		autoWebviewTimeout: 10000,
		fulReset: true,
		'appium-version': '1.9',
		deviceReadyTimeout: 10,
		browserName: '',
});
config.config = _.extend(config.config, {
	onPrepare: function () {
		var wd = require('wd'),
			protractor = require('protractor'),
			wdBridge = require('wd-bridge')(protractor, wd);
		wdBridge.initFromProtractor(exports.config);
	}
})

exports.config = config.config;
