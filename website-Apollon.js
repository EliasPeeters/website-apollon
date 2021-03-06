process.env["NTBA_FIX_319"] = 1;
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const bodyParser = require('body-parser');
const getCredentials = require('./getCredentials');
const mysqlSetup = require('./mysqlSetup');
const summary = require('./botRoutes/morningSummary');
const nodemailer = require('nodemailer');


credentials = getCredentials.getCredentials();
connection = mysqlSetup.getConnection();
app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const token = credentials.telegram.token;
bot = new TelegramBot(token, {polling: true});

// Routes
let status = require('./routes/status');
let contactForm = require('./routes/contactForm');
let testMessage = require('./routes/testMessage');
let message = require('./routes/message');

//botRoutes
let morningSummary = require('./botRoutes/morningSummary');
let help = require('./botRoutes/help');
let subscribe = require('./botRoutes/subscribe');
let unsubscribe = require('./botRoutes/unsubscribe');
let subscribeStatus = require('./botRoutes/subscribeStatus');

let port = 8089;
app.listen(port, () => {
    console.log(`Running on ${8089}`)
})

summary.sendMessageToAllSubs('🖥 Apollon started...')
