let opt = {"reply_markup": {
    "keyboard": [["/status"], ["/subscribe", "/unsubscribe"], ["/help"]]
    }
}

bot.onText(/\/help/, async (msg) => {
    const chatId = msg.chat.id;
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Subscribed to morning summary', opt);
});
