
const filePath = 'http://127.0.0.1:5500/archery-helper/sessions.json';


var sessions = [];
console.log("getting shit");
const response = await fetch(filePath);
sessions = await response.json();
//let data = fs.readFileSync("./sessions.json", 'utf8');


//sessions.push(JSON.parse(data));
//console.log(sessions[0].length)


const table = document.getElementById("table");

function averageScore(session) {
    let total = 0;
    for (let i = 0; i < session.rounds.length; i++) {
        total += session.rounds[i].score;
    }

    return (total / session.rounds.length);
}

for (let i = 0; i < sessions.length; i++) {
    table.innerHTML += `
    <tr>
        <th>${sessions[i].sessionNumber}</th>
        <th>${sessions[i].rounds.length}</th>
        <th>${averageScore(sessions[i])}</th>
    </tr>
    
    `
}
