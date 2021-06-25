
const mySecret = process.env['token']
const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
const keep_alive = require('./keep_alive.js')
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(process.env.token);
//YENI YER BURA

const BotlarGezegeni = new Discord.Client();
const GalaksiKorumaGemisi = new Discord.Client();
const AtmosferKayitGemisi = new Discord.Client();
const DunyaDenetimGemisi = new Discord.Client();
const GezegenModerasyonGemisi = new Discord.Client();

BotlarGezegeni.login(process.env.BotlarGezegeni)//Hesap Tokeni Token
GalaksiKorumaGemisi.login(process.env.GalaksiKorumaGemisi)//Hesap Tokeni Token
AtmosferKayitGemisi.login(process.env.AtmosferKayitGemisi)//Hesap Tokeni
DunyaDenetimGemisi.login(process.env.DunyaDenetimGemisi)//Hesap Tokeni Token
GezegenModerasyonGemisi.login(process.env.GezegenModerasyonGemisi)//Hesap Tokeni Token

//sese katilma


BotlarGezegeni.on("ready", () => {
BotlarGezegeni.channels.cache.get("855061830871678996").join()
})

GalaksiKorumaGemisi.on("ready", () => {
GalaksiKorumaGemisi.channels.cache.get("855061830871678996").join()
})


DunyaDenetimGemisi.on("ready", () => {
DunyaDenetimGemisi.channels.cache.get("855061830871678996").join()
})

GezegenModerasyonGemisi.on("ready", () => {
GezegenModerasyonGemisi.channels.cache.get("855061830871678996").join()
})



BotlarGezegeni.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      BotlarGezegeni.user.setActivity("Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

GalaksiKorumaGemisi.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      GalaksiKorumaGemisi.user.setActivity("Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

AtmosferKayitGemisi.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      AtmosferKayitGemisi.user.setActivity("Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

DunyaDenetimGemisi.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      DunyaDenetimGemisi.user.setActivity("Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

GezegenModerasyonGemisi.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      GezegenModerasyonGemisi.user.setActivity("Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
        })

//seslerdeki Botlar
const MERKUR = new Discord.Client();
const VENUS = new Discord.Client();
const DUNYA = new Discord.Client();
const MARS = new Discord.Client();
const JUPITER = new Discord.Client();
const SATURN = new Discord.Client();
const URANUS = new Discord.Client();
const NEPTUN = new Discord.Client();

MERKUR.login(process.env.MERKUR)
VENUS.login(process.env.VENUS)
DUNYA.login(process.env.DUNYA)
MARS.login(process.env.MARS)
JUPITER.login(process.env.JUPITER)
SATURN.login(process.env.SATURN)
URANUS.login(process.env.URANUS)
NEPTUN.login(process.env.NEPTUN)


MERKUR.on("ready", () => {
MERKUR.channels.cache.get("855048524148113438").join()
})

VENUS.on("ready", () => {
VENUS.channels.cache.get("855048559480537100").join()
})

DUNYA.on("ready", () => {
DUNYA.channels.cache.get("855048596587282440").join()
})

MARS.on("ready", () => {
MARS.channels.cache.get("855048627221954570").join()
})

JUPITER.on("ready", () => {
JUPITER.channels.cache.get("855048714557456404").join()
})

SATURN.on("ready", () => {
SATURN.channels.cache.get("855048751637725184").join()
})

URANUS.on("ready", () => {
URANUS.channels.cache.get("855048812275040276").join()
})

NEPTUN.on("ready", () => {
NEPTUN.channels.cache.get("855048843863130152").join()
})


MERKUR.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      MERKUR.user.setActivity("🤖 Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

VENUS.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      VENUS.user.setActivity("🤖 Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

DUNYA.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      DUNYA.user.setActivity("🤖 Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

MARS.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      MARS.user.setActivity("🤖 Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

JUPITER.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      JUPITER.user.setActivity("🤖 Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

SATURN.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      SATURN.user.setActivity("🤖 Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

URANUS.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      URANUS.user.setActivity("🤖 Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

NEPTUN.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      NEPTUN.user.setActivity("🤖 Botlar Gezegeni", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

//WEBHOOKLAR

