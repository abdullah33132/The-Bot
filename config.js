import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""

global.owner = [
  ['201008599375','[JoAnimi]-Killua☣️[3AMK]', true],
  ['201500781413'],
  ['201092544329'],
  ['212602272422']
];

global.suittag = ['201008599375'];
global.prems = ['201008599375'];
global.packname = '[3AMK]';
global.author = '[JoAnimi]-Killua☣️';
global.wm = 'killua';
global.titulowm = '[3AMK]';
global.titulowm2 = `[JoAnimi]-Killua☣️`
global.igfg = '[JoAnimi]-Killua☣️[3AMK]';
global.wait = '*|اصبر عليا شويه علشان انفذ طلبك|*';
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

global.saad = async function (chatId, userId) {
  // محاولة الحصول على بيانات المجموعة (metadata) من المحادثة المحددة بالمعرف chatId
  const metadata = (conn.chats[chatId] || {}).metadata || 
                   (await conn.groupMetadata(chatId).catch(error => null)) || {};
  
  // الحصول على قائمة المشاركين من بيانات المجموعة
  const participants = metadata.participants || [];
  
  // إنشاء قائمة بمعرفات المشاركين
  let participantIds = participants.map(participant => participant.id);
  
  // التحقق مما إذا كانت القائمة تحتوي على معرف المستخدم المحدد userId
  return participantIds.includes(userId);
};

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'ar';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('ar', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('ar', {month: 'long'});
global.año = d.toLocaleDateString('ar', {year: 'numeric'});
global.tiempo = d.toLocaleString('ar', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nBOBIZA`;
global.gt = 'KILLUA';
global.mysticbot = 'The KILLUA';
global.md = 'null';
global.mysticbot = 'null';
global.waitt = '*[ ⏳ ] LOADING...*';
global.waittt = '*[ ⏳ ] LOADING...*';
global.waitttt = '*[ ⏳ ] LOADING...*';
global.nomorown = '201008599375';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] التاريخ:*  ${moment.tz('Africa/cairo').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] الساعه:* ${moment.tz('Africa/cairo').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
