require("isomorphic-fetch");
const config = require("./config/configProd");
const BootBot = require("./Components/bootbot");
const bot = new BootBot({
	accessToken: config.ACCESS_TOKEN,
	verifyToken: config.VERTIFY_TOKEN,
	appSecret: config.APP_SECRET
});

// Set persistent Menu
const persistentMenu = require("./Components/persistentMenu/persistentMenu");
bot.setPersistentMenu(persistentMenu, false);
require("./postbacks/about")(bot);

//Get start Button
bot.setGetStartedButton((payload, chat) => {
	chat.getUserProfile().then(async user => {
		await chat.say(`Yo ${user.first_name} ${user.last_name}, chào mừng bạn đến với SC World.`)
		await chat.say('Mình là trợ lý của group, hãy tìm hiểu xem mình có thể giúp được gì cho bạn nhé ;)')
	})
})

// Check rank
bot.hear(["rank", "getrank", "checkrank"], (payload, chat) => {
	require("./Components/getRank/getRankMenu")(payload, chat);
});
require("./postbacks/rank")(bot);

// Keep Alive
bot.hear(["test", "."], (payload, chat) => {
	chat.say("test");
});

bot.start(config.PORT);