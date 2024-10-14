
const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner ========//
global.owner = '6285772046695'
global.nomerowner = ["6285772046695"]
// Apikey ======//
global.skizo = 'OrangHitam'
//watermark ====//
global.packname = 'Di Buat Oleh'
global.author = '©OrangHitam'
global.title = '⟡ O R A N  G ~ H I T A M ⟡'
global.body = 'Yang Baca Hitam'
global.filename = 'OrangBOT - Me'
global.botname = 'OrangBOT - Md'
global.shinka = 'Mi Amor'
global.idsaluran = '-'
global.namesaluran = '-'
global.sourceurl = '-'
//setcode & logo ======//
global.tekspushkonv1 = ``
global.tekspushkonv2 = ``
global.tekspushkonv3 = ``
global.tekspushkonv4 = ``
global.setmenu = "v1"
global.setreply = "v1"
global.antibot = false
global.khas = '∨'
global.khasbawah = 'ꕤ'
global.khasmiring = '◦'
global.khasatas1 = '[ ⏤͟͟͞͞ '
global.khasatas2 = ' ͟͟͞͞⏤ ]'
global.footer = 'OrangHitam'
// cpanel ======//
global.domain = 'https://center.zaaoffc.digitalserver.my.id'
global.apikey2 = 'Nothing' // Isi Apikey Plta Lu
global.capikey2 = 'Nothing' // Isi Apikey Pltc Lu 
global.eggsnya = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location
//linode & d-o ==//
global.apilinode = ''// apikey akun vps linode
global.apitokendo = ''
//database ======//
global.urldb = ''; // kosongin aja 
global.limitawal = {
    premium: "Unlimited",
    monayawal: 0,
    free: 100
}

//rpg ==========//
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
