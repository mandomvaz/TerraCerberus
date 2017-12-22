"use_strict"
var moment = require("moment");
var BDManager = module.exports = {};

BDManager.getActualTemp = function(){
    return new Promise((resolve, reject) => {
        resolve({
            warmzone: 42,
            midzone: 30,
            coldzone: 24
        });
    });
}

BDManager.getRangeTemp =  function(sensor, range){
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

BDManager.addTemperature = function(sensor, value){
    return new Promise((resolve, reject) => {
        resolve(true);
    });
}

