//link https://www.npmjs.com/package/node-telegram-bot-api 
//https://www.npmjs.com/package/dialogflow

const TelegramBot = require('node-telegram-bot-api');
const token = '';
const bot = new TelegramBot(token, {polling: true});

const dialogflow = require('./dialogFlow');

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text);

    const response = await dialogflow.sendMessage(chatId.toString(), msg.text);

    bot.sendMessage(chatId, (await response).text);
  });


