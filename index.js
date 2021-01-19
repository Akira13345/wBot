const {Client, RichEmbed} = require('discord.js');
config = require('./settings.json')
const bot = new Client();
bot.settings = require("./settings.json");



bot.on("ready", async () => {
  bot.user.setActivity(bot.settings.BotStatus, {type:"PLAYING"});
    console.log(`\u001b[32m`, `bot load successfully`)
    console.log(`\u001b[32m`, `→ good use !`)


})


bot.on("guildMemberAdd", (member) => {
  let channel = member.guild.channels.find(channel => channel.id === `${bot.settings.welcome_channel}`)
  let autorole = member.guild.roles.find(autorole => autorole.id === `${bot.settings.auto_role}`)
  let memberavatar = member.user.avatarURL
  
  const WelcomeMsg= new Discord.RichEmbed()
  .setColor(bot.settings.colour)
  .setThumbnail(memberavatar)
  .setTitle(bot.settings.title)
  .setDescription(bot.settings.description)
  .setFooter(bot.settings.footer)
  .setTimestamp(new Date())

  channel.send(WelcomeMsg);
  member.addRole(autorole).catch(console.error);
});


bot.login(bot.settings.token);




