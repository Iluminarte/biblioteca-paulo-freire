const gsjson = require('google-spreadsheet-to-json');

exports.all = gsjson({
	spreadsheetId: process.env.SPREADSHEET_ID
})

.then(result => result)
