const schedule = require('node-schedule') 

console.log('Job started')

summaryTimes = [
    {
        hour: 18,
        minute: 0        
    },
    {
        hour: 8,
        minute: 0        
    },
    {
        hour: 12,
        minute: 0
    }
]

let summaryPushObjects = []

for (i = 0; i < summaryTimes.length; i++) {
    let hour = summaryTimes[i].hour;
    let minute = summaryTimes[i].minute;
    console.log(`Created summary add ${hour}:${minute}`);
    summaryPushObjects.push(
        schedule.scheduleJob({hour: hour, minute: minute}, async () => {
            console.log(hour)
            sendSummary(hour, minute)
        })
    )
}

async function sendSummary(hour, minute) {
    console.log(`Job runs every day at ${hour}:${minute}`);
    let subscribers = await connection.asyncquery('SELECT * FROM telegramBotSubs');
    for (let i = 0; i < subscribers.length; i++) {
        bot.sendMessage(subscribers[i].tb_chatID, `This is your summary at ${hour}:${minute}`);
    }
}

module.exports = {sendSummary}