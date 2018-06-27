const BootBot = require('bootbot');
const config = require('./config/configProd');
require('isomorphic-fetch');
const bot = new BootBot({
	accessToken: config.ACCESS_TOKEN,
	verifyToken: config.VERTIFY_TOKEN,
	appSecret: config.APP_SECRET
});

// Set persistent Menu
const persistentMenu = require('./Components/persistentMenu/persistentMenu')
bot.setPersistentMenu(persistentMenu, false)
require('./postbacks/about')(bot)

// Check rank
bot.hear(['rank', 'getrank', 'checkrank'], (payload, chat) => {
	require('./Components/getRank/getRankMenu')(payload, chat)
});
require('./postbacks/rank')(bot)

// Keep Alive
bot.hear('test', (payload, chat) => {
	chat.say('test');
});

bot.on('message', (payload, chat) => {
	chat.sendTypingIndicator(1000)
})

bot.start(config.PORT);
