(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const filePath = './sessions.json';
var sessions = [];
fetch(filePath)
    .then((response) => response.json())
    .then((json) => console.log(json));
//let data = fs.readFileSync("./sessions.json", 'utf8');


//sessions.push(JSON.parse(data));
//console.log(sessions[0].length)


//const table = document.getElementById("table");

// function averageScore(session) {
//     let total = 0;
//     for (let i = 0; i < session.rounds.length; i++) {
//         total += session.rounds[i].score;
//     }

//     return (total / session.rounds.length);
// }

// for (let i = 0; i < sessions[0].length; i++) {
//     console.log(sessions[0][i].sessionNumber);
//     table.innerHTML += `
//     <tr>
//         <th>${sessions[0][i].sessionNumber}</th>
//         <th>${sessions[0][i].rounds.length}</th>
//         <th>${averageScore(sessions[0][i])}</th>
//     </tr>
    
//     `
// }

},{}]},{},[1]);
