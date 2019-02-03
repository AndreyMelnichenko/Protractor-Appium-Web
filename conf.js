// 'use strict'
exports.config = {

    directConnect: true,
    ignoreUncaughtExceptions: true,
    baseUrl: 'https://www.google.com.br/',
    capabilities: {
        'browserName': 'chrome',
    },


/*    beforeLaunch: function() {
        setTimeout(function() {
            browser.executeScript(function() {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                };
            }).then(function(result) {
                browser.manage().window().setSize(result.width, result.height);
            });

        });

    },

    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(10000);

        by.addLocator('dataTest',function(text) {
            return document.querySelector(`[data-test="${text}"]`)
        });
    },*/

};