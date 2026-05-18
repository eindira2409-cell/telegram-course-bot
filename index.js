const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');

// Твой токен от @BotFather
const token = '8745448059:AAE0hINMet-KjiDuoZcwQ4TVpsprmR0FO6U'; 
const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json());
app.use(cors());

// ВСТАВЬ СЮДА ССЫЛКУ, КОТОРУЮ ТЕБЕ ВЫДАЛ VERCEL!
const MINI_APP_URL = 'file:///Users/kuralay/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/gemini-code-1779113802384.html'; 

// Логика бота: реагируем на команду /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, `Привет, ${msg.from.first_name || 'будущий эксперт'}! 🚀\n\nДобро пожаловать на курс «Ассистент предпринимателя». Готова начать обучение и освоить востребованную профессию?`, {
        reply_markup: {
            inline_keyboard: [
                [
                    { 
                        text: "Открыть личный кабинет 📱", 
                        web_app: { url: MINI_APP_URL } 
                    }
                ]
            ]
        }
    });
});

// Роут для проверки работы сервера
app.get('/', (req, res) => {
    res.send('Сервер курса успешно запущен на GitHub!');
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен и слушает порт ${PORT}`);
});
