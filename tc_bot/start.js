"use_strict"

var Telegraf = require("telegraf");

var token = global.config.BotToken;

var bot = new Telegraf(token);

bot.command("help", (msg)=>{
    console.log(msg);
});



console.log("Start Bot");
bot.startPolling();