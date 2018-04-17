'use strict'	

var path = require('path');
var fs = require("fs");

const CONFIGFILENAME = "config.json";
const CONFIGFOLDER = "config";

module.exports = function(){
    if ( global.ROOT_LOCAL_PATH == undefined ) { 
        global.ROOT_LOCAL_PATH = process.cwd();
    }
    
    let p = path.join(global.ROOT_LOCAL_PATH, CONFIGFOLDER, CONFIGFILENAME);
        
    if ( fs.existsSync(p) ) {
        global.config = JSON.parse(fs.readFileSync( p, 'utf8' ))		
    } else {
        throw new Error( CONFIGFILENAME + " files doesn't exist" );
    }
}

