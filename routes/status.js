app.get('/', async (req, res) => {
    res.send('Apollon');
    let subscribers = await connection.asyncquery('SELECT * FROM telegramBotSubs');
    for (let i = 0; i < subscribers.length; i++) {
        bot.sendMessage(subscribers[i].tb_chatID, 'Good morning');
    }
})