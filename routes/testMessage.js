const summary = require('../botRoutes/morningSummary');

app.get('/test', async (req, res) => {
    await summary.sendSummaryNow();
    res.send('send');
});
