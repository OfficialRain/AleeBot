const Discord = require('discord.js');
exports.run = (client, message, args, config) => {
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setDescription("Here's your info.")
  .addField("Names", "Username: " + message.author.username + "\nNickname: " + message.member.displayName)
  .addField("Identity", "User ID: " + message.author.id + "\nDiscriminator: " + message.author.discriminator)
  .addField("Create and Join Times", "Created account at: " + message.member.user.createdAt + "\nJoined server at: " + message.member.joinedAt)
  .setColor("#7af442")
   message.channel.sendEmbed(embed);

}

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'userinfo',

  description: 'It will tell your user info!',

  usage: 'userinfo'

};
