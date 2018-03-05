"use_strict"
var moment = require("moment");
var path = require("path");
var jsonFileHandler = global.gimport("jsonfilehandler");

const INFOFILESPATH = global.config.infoFilesLocation;

function getActualTemp(file, sensorid){
    return new Promise((resolve, reject) => {
        let filepath = path.join(INFOFILESPATH, file);
        let info = jsonFileHandler.loadJsonData(filepath);

        resolve({
            temp: info[sensorid][0]
        });
    });
}

function getRangeTemp(sensor, range){
    return new Promise((resolve, reject) => {
        resolve({
            sensor: sensor,
            temperatures:[
                { time: "", temp: "" },
                { time: "", temp: "" },
                { time: "", temp: "" },
                { time: "", temp: "" },
                { time: "", temp: "" },
                { time: "", temp: "" },
                { time: "", temp: "" },
                { time: "", temp: "" },
                { time: "", temp: "" },
                { time: "", temp: "" },
                { time: "", temp: "" }
            ]
        });
    });
}

function addTemperature(sensor, value){
    return new Promise((resolve, reject) => {
        resolve(true);
    });
}

var InfoManager = module.exports = {};