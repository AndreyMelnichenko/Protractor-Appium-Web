'use strict';

let currentPath = process.cwd();
const appName = 'test-app.apk';

function sysSeparator (){
    if (process.platform === "win32"){
        return "\\";
    }else {
        return "/";
    }
}

function appPath(){
    return currentPath + sysSeparator() + appName;
}

module.exports.appPath = appPath;

