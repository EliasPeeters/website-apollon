let summary = require('../botRoutes/morningSummary');

app.get('/test', async (req, res) => {
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    await summary.sendSummary(hour, minute);
    res.send('send');
});