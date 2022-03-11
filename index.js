const Discord = require("discord.js");
const webhook = new Discord.WebhookClient({url: "Input Ur Webhook Url"});
webhook.send("```Hey There Your Code Is : " + /*5 Digit Max*/Math.floor(Math.random() * 69420) + "```");
console.log("Sended Webhook");
