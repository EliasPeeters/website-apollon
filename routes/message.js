const summary = require('../botRoutes/morningSummary');

app.get('/message', async (req, res) => {
    let pswd = req.query.pswd;
    let message = req.query.message;
    if (pswd != credentials.telegram.pswd) {
        res.send('wrong pswd');
    } else {
        summary.sendMessageToAllSubs(message)
        res.send('correct');
    }
    
});
