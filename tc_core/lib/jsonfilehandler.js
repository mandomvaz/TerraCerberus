"use strict"
var fs = require("fs");

function loadJsonData(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data)=>{
            resolve(JSON.parse(data));
        })
    });
}

function writeJsonData(path, content){
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(content, null, "\t"), "utf-8")
    });
}


module.exports = {
    loadJsonData: loadJsonData,
    writeJsonData: writeJsonData
}