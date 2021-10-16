async function checkSubscribe(chatID) {
    let subscribers = await connection.asyncquery(`SELECT * FROM telegramBotSubs WHERE tb_chatID = ${chatID}`);
    return subscribers.length == 0;
}

bot.onText(/\/unsubscribe/, async (msg) => {
    const chatId = msg.chat.id;
    if ((await checkSubscribe(chatId))) {
        bot.sendMessage(chatId, 'Not subscribed');
        return;
    } 
    let query = `DELETE FROM website.telegramBotSubs WHERE tb_chatID = ${chatId}`

    await connection.asyncquery(query)
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Unsubscribed to morning summary');
});
