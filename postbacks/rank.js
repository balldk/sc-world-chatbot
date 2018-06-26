module.exports = bot => {
    bot.on('postback:RANK', (payload, chat) => {
        require('../Components/getRank/getRankMenu')(payload, chat)
    })

    bot.on("postback:RANK_CURRENT", (payload, chat) => {
        require('../Components/getRank/getRank')(chat, payload.sender.id)
    });
    
    bot.on("postback:RANK_ID", (payload, chat) => {
        chat.conversation(convo => {
            convo.ask("Hãy nhập ID", (payload, convo) => {
                let msg = payload.message.text;
                require('../Components/getRank/getRank')(convo, msg)
            });
        });
    });

    bot.on("postback:RANK_TOP", (payload, chat) => {
        require('../Components/getRank/getRankTop')(chat)
    });
}