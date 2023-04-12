const TelegramApi = require('node-telegram-bot-api')

const token = '5652973267:AAE6TVf4u8CfGUZkWyloV5ZWJEtMfzVJPVw'

const bot = new TelegramApi(token, {polling: true})

//Доделать кнопки
/*const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Текст кнопки', callback_data: '0_o'}]
            [{text: 'Текст кнопки', callback_data: '0_o'}]
            [{text: 'Текст кнопки', callback_data: '0_o'}]
            [{text: 'Текст кнопки', callback_data: '0_o'}]
        ]
    })
}*/

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Информация'},
        {command: '/game', description: 'Игра'},
    ])
    
    bot.on('message', async msg => { 
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if(text === '/start') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/da5/82c/da582c1a-839a-4199-9a10-f7a138282b5e/9.webp')
            return bot.sendMessage(chatId, 'Добро пожаловать!')
        }
        if(text === '/info') {
            return bot.sendMessage(chatId, `Список команд :\n/start\n/info\n/game`)
        }
        if(text === '/game') { // Доделать игру угадайка
            return bot.sendMessage(chatId, 'Давай поиграем в игру угадайка =)')
            /*const randomNumber = Math.floor(Math.random() * 10)
            chats[chatId] = randomNumber;
            return bot.sendMessage(chatId, 'Отгадывай', gameOptions);*/
        }
        return (await bot.sendMessage(chatId, `Я не понимаю тебя, ${msg.from.first_name}. Попробуй ввести другую команду.`), 
        await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/31.webp'))
    })
}

start();
