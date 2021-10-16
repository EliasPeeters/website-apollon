bot.onText(/\/subscribe/, async (msg) => {
    const chatId = msg.chat.id;
    let query = connection.createQueryStringFromObject({
        table: 'telegramBotSubs',
        tb_chatID: chatId
    });

    await connection.asyncquery(query)
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Subscribed to morning summary');
});
