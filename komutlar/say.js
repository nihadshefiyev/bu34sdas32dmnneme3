const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

 
    const say = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
        .addField("<a:55ef4:802030217173401611> Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("<a:55ef4:802030217173401611> Sunucudaki Bot Sayısı", message.guild.members.cache.filter(m => m.user.bot).size)
        .addField("<a:55ef4:802030217173401611> Çevrimiçi üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status !== "offline").size)
        .addField("<a:55ef4:802030217173401611> Çevrimdışı üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status == "offline").size)

    message.channel.send(say);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'gelişmiş-say',
    description: 'Say',
 }
