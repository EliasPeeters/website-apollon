const schedule = require('node-schedule') 

console.log('Job started')
const j = schedule.scheduleJob({hour: 21, minute:11}, () => {
    console.log('Job runs every day at 5:30AM');
    for (let i = 0; i < subscribers.length; i++) {
        bot.sendMessage(subscribers[0], 'Good morning');
    }
});