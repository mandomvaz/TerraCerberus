"use_strict";

/**
 * Module to define solution wide constants
 */

 var Constants = module.exports = {};

 var CONFIG = (function () {
     var keys = {
         
     };

     return {
         get: function(name){ return keys[name];}
     };
 })();

 Constants.get = function(name){
     return CONFIG.get(name);
 }

