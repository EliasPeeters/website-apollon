const schedule = require('node-schedule') 

console.log('Job started')
const j = schedule.scheduleJob({hour: 12, minute: 45}, async () => {
    console.log('Job runs every day at 5:30AM');
    let subscribers = await connection.asyncquery('SELECT * FROM telegramBotSubs');
    for (let i = 0; i < subscribers.length; i++) {
        bot.sendMessage(subscribers[i].tb_chatID, 'Good morning');
    }
});