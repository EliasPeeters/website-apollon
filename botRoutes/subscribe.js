// true  == existiert noch nicht => kann angelegt werden
// false == existiert bereits    => sollte nicht angelegt werden

async function checkSubscribe(chatID) {
    let subscribers = await connection.asyncquery(`SELECT * FROM telegramBotSubs WHERE tb_chatID = ${chatID}`);
    return subscribers.length == 0
}

bot.onText(/\/subscribe/, async (msg) => {
    const chatId = msg.chat.id;
    if (!(await checkSubscribe(chatId))) {
        bot.sendMessage(chatId, 'Already subscribed');
        return;
    } 
    let query = connection.createQueryStringFromObject({
        table: 'telegramBotSubs',
        tb_chatID: chatId
    });

    await connection.asyncquery(query)
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Subscribed to morning summary');
});
