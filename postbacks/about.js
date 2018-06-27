module.exports = bot => {
    bot.on('postback:ABOUT', (payload, chat) => {
        chat.say('SC WORLD được thành lập dựa trên nhu cầu bảo mật ngày nay, trong công nghiệp hóa 4.0, internet là một nơi chứa nhiều cạm bẫy, hy vọng chúng tôi sẽ bảo vệ bạn khỏi 1 trong số những cạm bẫy đó')
    })
}