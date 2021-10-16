async function checkSubscribe(chatID) {
    let subscribers = await connection.asyncquery(`SELECT * FROM telegramBotSubs WHERE tb_chatID = ${chatID}`);
    return subscribers.length == 0;

}

bot.onText(/\/status/, async (msg) => {
    const chatId = msg.chat.id;
    if (!(await checkSubscribe(chatId))) {
        bot.sendMessage(chatId, 'Subscribed to morning summary');
    } else {
        bot.sendMessage(chatId, 'Not subscribed to morning summary');
    }
});
