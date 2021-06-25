const Discord = require("discord.js");
exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      "Veriler", 
      `**Toplam sunucu:__ __${
        client.guilds.cache.size
      }** \n**Toplam kullanıcı:__ __${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n**Toplam kanal:** __${
        client.channels.cache.size
      }__`
    ) 
    .addField(
      "Bot Geliştiricisi",
      `**<a:NihadDesign:846641120166543370>**  <@289464872222064651> | `
    )  
    .addField(
      "Sürümler",
      `**Discord.js sürümü:** __${Discord.version}__ \n**Node.js sürümü:** __${process.version}__`
    ) 
    .addField(
      "Gecikmeler",
      `**Bot pingi:__ __${
        client.ws.ping
      }** \n**Mesaj gecikmesi:** __${new Date().getTime() -
        message.createdTimestamp}__`
    )
    
    .setTimestamp()
    .setColor("DARKRED");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i"]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};