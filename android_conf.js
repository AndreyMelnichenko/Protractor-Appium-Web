//var wd = require('wd');
    //wdBridge = require('wd-bridge')(wd);


exports.config = {
    seleniumAddress: 'http://0.0.0.0:4723/wd/hub',
    framework: 'jasmine',
    specs: ['todo-spec.js'],
    // multiCapabilities: [{
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'chrome'
    // }]
    // ,
    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '7.0',
        deviceName: 'TestDevice',
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    // onPrepare: function () {
    //     var wd = require('wd'),
    //         protractor = require('protractor'),
    //         wdBridge = require('wd-bridge')(protractor, wd);
    //     wdBridge.initFromProtractor(exports.config);
    // }

};
