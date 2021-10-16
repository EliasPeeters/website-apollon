process.env["NTBA_FIX_319"] = 1;
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const bodyParser = require('body-parser');
const getCredentials = require('./getCredentials');
const mysqlSetup = require('./mysqlSetup');


credentials = getCredentials.getCredentials();
connection = mysqlSetup.getConnection();
app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const token = credentials.telegram.token;
bot = new TelegramBot(token, {polling: true});


bot.onText(/\/unsubscribe/, (msg) => {
    const chatId = msg.chat.id;
    subscribers.push(chatId);
    console.log(subscribers)
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Subscribed to morning summary');
});


// Routes
let status = require('./routes/status');
let contactForm = require('./routes/contactForm');

//botRoutes
let morningSummary = require('./botRoutes/morningSummary');
let subscribe = require('./botRoutes/subscribe');

let port = 8089;
app.listen(port, () => {
    console.log(`Running on ${8089}`)
})