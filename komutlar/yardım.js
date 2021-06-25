const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
 .setColor('RANDOM')
    .setTitle('deneme amaci')
    .setURL('https://discord.js.org/')
    .setAuthor('denemek', 'https://media.discordapp.net/attachments/834828087241211995/839127115403493407/discord-avatar-512-POK9C.gif?width=384&height=384', 'https://media.discordapp.net/attachments/834828087241211995/839127115403493407/discord-avatar-512-POK9C.gif?width=384&height=384')
    .setDescription("deneme icin acildi**")
    .setThumbnail('https://media.discordapp.net/attachments/834828087241211995/839127115403493407/discord-avatar-512-POK9C.gif?width=384&height=384')
    
    .addField('deneme deni ace', 'denemes', true)
    .setImage('https://media.discordapp.net/attachments/834828087241211995/839127115403493407/discord-avatar-512-POK9C.gif?width=384&height=384')
    .setTimestamp()

message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  
  name: 'yardım',
  cooldown: 43200000,
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'yardım'

}

