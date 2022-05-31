const Telegraf = require('telegraf');

const bot = new Telegraf('5517356878:AAGM96z2WC5xoxsJR7BIhfP80FXT5ciwulk')

//helpMessage
const helpMessage =
    `
*NewDevz Tutorial Bot*
This is a simple tutorial bot.
To create a new Telegram bot send /start to botfather
Copy and initialize bot on your node project
/start - To begin already created bot

`;


bot.start((ctx) => {
    ctx.reply('Hello!! ' + ctx.from.first_name + ', My Name is NewDevz Tutorial Bot. How May I be of help today?');
})

bot.help(ctx => {
    //allows you to send to specific user and change options
    bot.telegram.sendMessage(ctx.from.id, helpMessage, {
        parse_mode: "markdown"
    })

})

//settings
bot.settings((ctx) => {
    ctx.reply('You have entered the settings command');
})

//command
bot.command(["test", "Test", "test1"], (ctx) => {
    ctx.reply("Hello World");
})

bot.hears("cat", (ctx) => {
    ctx.reply('Meow')
})

// bot.on("text", (ctx) => {
//     ctx.reply("This is a text message")
// })

//sendphoto
bot.command('pix', ctx => {
    //url
    //bot.telegram.sendPhoto(ctx.chat.id, "https://cdn.devdojo.com/images/december2020/couple-on-couch.jpeg");
    //bot.telegram.sendPhoto("https://images.unsplash.com/photo-1533693706533-57740e69765d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2700&amp;q=80")

    // //file path
    bot.telegram.sendPhoto(ctx.chat.id, { source: "images/london.jpg" },
        {
            reply_to_message_id: ctx.message.message_id
        }
    );


})

//sendVideo
bot.command('video', ctx => {
    bot.telegram.sendVideo(ctx.chat.id, { source: "videos/Billie Eilish - Happier Than Ever (Official Music Video).mp4" })
})


//sendAnimation
bot.command('gif', ctx => {
    bot.telegram.sendAnimation(ctx.chat.id, "https://media.giphy.com/media/USyYfpYeJl4eEohjJ1/giphy.gif")
    //https://giphy.com/clips/kidschoice-kids-choice-awards-2021-8xDqsXErHND7JxhKW8
})

bot.command('gif1', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_video")
    bot.telegram.sendAnimation(ctx.chat.id, "https://media.giphy.com/media/zneG2ZZizhRVC0AgOP/giphy.gif")

})

bot.command('gif2', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_video")
    bot.telegram.sendAnimation(ctx.chat.id, "https://media.giphy.com/media/Y41w8WlCg9OYV9DbYw/giphy.gif",
        {
            reply_to_message_id: ctx.message.message_id
        }
    )

})

bot.launch();