exports.config  = {
    seleniumAddress: 'http://0.0.0.0:4723/wd/hub',
    framework: 'jasmine',
    specs: ['browser_spec.js'],

    capabilities: {
        platformName: 'Android',
        platformVersion: '7.1',
        deviceName: 'TestDevice',
	    browserName: 'chrome',
    },

	SELENIUM_PROMISE_MANAGER: true,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

};
