const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion} = (await import(global.baileys))
import qrcode from 'qrcode'
import NodeCache from 'node-cache'
import fs from 'fs'
import path from 'path'
import pino from 'pino'
import util from 'util' 
import * as ws from 'ws'
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'

let check1 = 'NjBhZGVmZWI4N2M2'
let check2 = 'ZThkMmNkOGVlMDFmZD'
let check3 = 'UzYTI1MTQgIGluZ'
let check4 = 'm8tZG9uYXIuanMK'
let check5 = 'NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO'
let check6 = 'DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz'
let check8 = 'NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo'

let crm1 = 'Y2QgcGx1Z2lucy'
let crm2 = 'A7IG1kNXN1b'
let crm3 = 'SBpbmZvLWRvbmFyLmpz'
let crm4 = 'IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz'
let drm1 = 'CkphZGlib3QsIEhlY2hv'
let drm2 = 'IFBvciBAYW5nXzB5='
let rtx = `JadiBot - Mee6\n\nScan this QR to become a temporary bot\n\n1. Click on the three dots in the top right corner.\n2. Tap Linked Devices\n3. Link a device\n4. Scan this QR\n\nQR Expires in 20 seconds.`
let rtx2 = `JadiBot - Mee6\n\nLog in with this code to become a temporary bot\n\n1. Click on the three dots in the top right corner.\n2. Tap Linked Devices.\n3. Link a device.\n4. Link with phone number.\n5. Paste the code below.\n\nCode Expires in 20 seconds.`

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
let parentw = conn
if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, `🌹 *dirígete a número oficial del bot*\nwa.me/${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}`, m ) 
const mcode = args[0] && args[0].includes('--code') ? true : args[1] && args[1].includes('--code') ? true : false


let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (mcode) {
args[0] = args[0].replace('--code', '').trim()
if (args[1]) args[1] = args[1].replace('--code', '').trim()
if (args[0] == '') args[0] = undefined
console.log(args[0])}
if (!fs.existsSync('./MJadiBot/'+ id)){
fs.mkdirSync('./MJadiBot/'+ id, { recursive: true })}
args[0] && args[0] != undefined ? fs.writeFileSync('./MJadiBot/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, '\t')) : ''

if (fs.existsSync('./MJadiBot/' + id + '/creds.json')) {
let creds = JSON.parse(fs.readFileSync("./MJadiBot/" + id + "/creds.json"))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync('./MJadiBot/' + id + '/creds.json')
}}}
    
const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, 'base64')
exec(comb.toString('utf-8'), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)
async function jddt() {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (!fs.existsSync('./MJadiBot/'+ id)){
fs.mkdirSync('./MJadiBot/'+ id, { recursive: true })
}
args[0] ? fs.writeFileSync('./MJadiBot/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, `\t`)) : ''

let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState("./MJadiBot/" + id)
   
const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
browser: mcode ? ["Chrome (Linux)", "", ""] : ['Sub Bot','Opera','5.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'JEEN',
}}}

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) conn.isInit = false
if (qr && !mcode) return parentw.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx + drmer.toString('utf-8')}, { quoted: m})
if (qr && mcode) {
parentw.sendMessage(m.chat, {text : rtx2 + drmer.toString('utf-8')}, { quoted: m })
await sleep(5000)
let secret = await conn.requestPairingCode((m.sender.split`@`[0]))
await m.reply(secret)}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
const endSesion = async (loaded) => {
if (!loaded) {
try {
conn.ws.close()
} catch {
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)		
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
await fs.unlinkSync('./MJadiBot/' + id + '/creds.json')

//thank you aiden_notLogic

return await conn.reply(m.chat, '🌸 *Conexión Cerrada*', m )
}
if (reason === DisconnectReason.restartRequired) {
jddt()
return console.log('🌹 Conexión reemplazada, se ha abierto otra nueva sesion, por favor, cierra la sesión actual primero')
} else if (reason === DisconnectReason.loggedOut) {
sleep(4000)
return conn.reply(m.chat, '🌸 *La conexión se ha cerrado, tendras que volver a conectarse usando:*\n!deletebot (Para borrar los datos y poder volver a solitar el QR o el código de emparejamiento', m )
} else if (reason == 428) {
await endSesion(false)
return conn.reply(m.chat, '🌹 *La conexión se ha cerrado de manera inesperada, intentaremos reconectar...*', m )
} else if (reason === DisconnectReason.connectionLost) {
await jddt()
return console.log('🌸 Conexión perdida con el servidor, reconectando')
} else if (reason === DisconnectReason.badSession) {
return await conn.reply(m.chat, '🌹 *La conexión se ha cerrado, deberá de conectarse manualmente*', m )
} else if (reason === DisconnectReason.timedOut) {
await endSesion(false)
return console.log('🌸 Tiempo de conexión agotado, reconectando....')
} else {
console.log()
}}
if (global.db.data == null) loadDatabase()
if (connection == `open`) {
conn.isInit = true
global.conns.push(conn)
await parentw.sendMessage(m.chat, {text : args[0] ? `✅ *Conectado correctamente al WhatsApp*` : `🌸 *Conectado correctamente al WhatsApp*\n\nUtilice su ID para volver a conectarse`}, { quoted: m })
await parentw.sendMessage(m.chat, {text : `🌹 *Esta conectado, espere un momento*`}, { quoted: m })
await sleep(5000)
if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + ' ' + Buffer.from(fs.readFileSync('./MJadibot/' + id + '/creds.json'), 'utf-8').toString('base64')}, { quoted: m })    

}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close() } catch (e) {      
console.log(await creloadHandler(true).catch(console.error))
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)		
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
													 
} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = conn.chats
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
conn.welcome = '*• Hola, Gracias por unirte!!*\n*━━━━━━━━━━━━━━━━━━━*\n\n🍧 *• Nombre :* @user\n🗓️ *• Fecha :* @date\n⏰ *• Hora :* @time\n\n*⚠️  Recuerda leer la descripción*\n@readMore\n@desc'
conn.bye = '*• Gracias por haber sido parte del grupo*\n*━━━━━━━━━━━━━━━━━━━━━━━━━*\n\n🍧 *• Nombre :* @user\n🗓️ *• Fecha :* @date\n⏰ *• Hora :* @time'
conn.spromote = '*@user* ¡Se suma al grupo de admins¡'
conn.sdemote = '*@user* ¡Abandona el grupo!'
conn.sDesc = '¡Se ha modificado la descripción!\n\n*Nueva descripción:* @desc'
conn.sSubject = '¡Se ha modificado el título del grupo!'
conn.sIcon = '¡Se ha cambiado la foto del grupo!'
conn.sRevoke = '¡Se ha actualizado el enlace del grupo!*\n*Nuevo enlace:* @revoke'

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.onCall = handler.callUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

const currentDateTime = new Date()
const messageDateTime = new Date(conn.ev * 1000)
if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) {
console.log('Leyendo mensaje entrante:', conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = false
})
} else {
console.log(conn.chats, `⏳️ Espere se están cargando los mensajes.`, conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = true
})
}

conn.ev.on(`messages.upsert`, conn.handler)
conn.ev.on(`group-participants.update`, conn.participantsUpdate)
conn.ev.on(`groups.update`, conn.groupsUpdate)
conn.ev.on(`message.delete`, conn.onDelete)
conn.ev.on(`call`, conn.onCall)
conn.ev.on(`connection.update`, conn.connectionUpdate)
conn.ev.on(`creds.update`, conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
})

} 
handler.help = [`copybot`]
handler.tags = [`copybot`]
handler.command = /^(copybot)/i
handler.register = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}