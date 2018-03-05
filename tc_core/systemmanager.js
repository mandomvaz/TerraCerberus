"use_strict"
var moment = require("moment");
var jsonFileHandler = global.gimport("jsonfilehandler");
var path = require("path");

SystemManager = module.exports = {}
const SYSTEMFILEPATH = path.join(process.cwd(), global.config.systemFileLocation);


function loadSystemData(){
    return jsonFileHandler.loadJsonData(SYSTEMFILEPATH);
}

function writeSystemData(content){
    return jsonFileHandler.writeJsonData(SYSTEMFILEPATH, content);
}

SystemManager.getSystem = function(){
    return loadSystemData();
}

