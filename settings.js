//



const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid = '' //'ur session id මෙතනට ඔයා whatsapp link කර කෝඩ් එක දාන්න'

//owmner v card
global.ytname = "YT: Avi NET-Hunter" //ur yt chanel name
global.socialm = "GitHub: avishka33" //ur github or insta name
global.location = "Srilanka,southern, Galle" //ur location

//new
global.botname = '𝓐𝓿𝓲-𝔁-𝓪𝓷𝓰𝓮𝓵' //ur bot name
global.ownernumber = '94772836332' //ur owner number
global.ownername = '𝓡𝓮𝓪𝓵 𝓚𝓲𝓷𝓰 𝓐𝓿𝓲' //ur owner name
global.websitex = "https://youtube.com/@Avi_NetHunter?sub_confirmation=1"
global.wagc = "https://whatsapp.com/channel/0029VaGisHDFHWq5jpuEmC2t"
global.themeemoji = '🗡'
global.wm = "𝘼𝙫𝙞-𝙞𝙣𝙛𝙞𝙣𝙖𝙩𝙚-𝙀𝙙𝙞𝙩𝙞𝙤𝙣"
global.botscript = 'https://github.com/avishka33/Avi-x-angel' //script link
global.packname = "𝓡𝓮𝓪𝓵 𝓚𝓲𝓷𝓰 𝓐𝓿𝓲"
global.author = "𝓡𝓮𝓪𝓵 𝓚𝓲𝓷𝓰 𝓐𝓿𝓲\n\n+94772836332"
global.creator = "94772836332@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["94772836332","94787672517","94701074312"] // Premium User
global.hituet = 0

//bot settings

global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '94' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = true //auto status/story view ඔටෝ ස්ටේටස් බලන්න true කියලා දාන්න
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat

//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./AviMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
