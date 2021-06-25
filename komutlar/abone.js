let Discord = require("discord.js")
let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`Abone rolü ayarlanmamış!`)
  if(!abonelog) return message.channel.send(`Abone log kanalı ayarlanmamış!`)
  if(!aboneyetkilisi) return message.channel.send(`Abone yetkili rolü ayarlanmamış!`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  
  await(abonekisi.roles.add(abonerol))
  message.author.send(`<a:NihadHouse5:848985855187615834>Yetkili Basvurusu başarıyla onaylandi.`)
  const embed = new Discord.MessageEmbed()
  .setTitle(`<a:NihadHouse5:848985855187615834>Basvurunuz Onaylanmisdir`)
  
  .addField(`<a:NihadHouse5:848985855187615834>Yetkili Rolünü Veren Kişi:`, `Adı:${message.author.tag} İD:${message.author.id}`, true)
 
  .addField(`<a:NihadHouse5:848985855187615834>Yetkili Rolü Verilen Kişi`, `${user}`, true)
 
  .addField(`<a:NihadHouse5:848985855187615834>Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
 
  .setColor(`#c30202`)
 
  .setFooter(`${client.user.username} Yetkili Onay Sistemi`)
  message.guild.channels.cache.get(abonelog).send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['onayla'],
  perm: 0
}
exports.help = {
  name: 'a'
}

exports.play = {
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'
}

