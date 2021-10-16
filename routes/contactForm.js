app.get('/contactForm', async (req, res) => {
    let subject = req.query.subject;
    let message = req.query.message;
    let time = req.query.time;
    let name = req.query.name;
    let mail = req.query.mail;

    const opts = {
        parse_mode: 'Markdown'
      };

    let subscribers = await connection.asyncquery('SELECT * FROM telegramBotSubs');
    console.log(subscribers)
    for (let i = 0; i < subscribers.length; i++) {
        bot.sendMessage(subscribers[0].tb_chatID, `*✉️ New Mail*\n\n*${subject}* \n\n👤 From ${name}\n⏰ ${time}\n👤${mail} \n\n${message}`, opts);
    }
})