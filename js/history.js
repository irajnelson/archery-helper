const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sessions.json');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    try {
        const sessions = JSON.parse(data);
        console.log(sessions);
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});
const table = document.getElementById("table");