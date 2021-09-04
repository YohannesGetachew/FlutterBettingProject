import * as fs from 'fs';
import * as path from 'path';

const dates = [
    "2014-03-01T08:00:00Z",
    "2014-04-04T11:21:39.736Z",
    "2015-06-04T05:08:13Z",
    "2015-09-10T08:43:00Z",
    "2016-02-06T20:20:13Z"
];

const status = [
    "WIN",
    "LOSE",
    "PENDING"
]


const randomChar = () => {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26));
}
const randomSixDigitNumber = () => {
    const minm = 100000; 
    const maxm = 999999;    
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}
const writeToFile = (data) => {
    fs.writeFileSync(path.join(__dirname + '../../../src/seed/data', "tickets.json"), data);
}
const t = () => {
    const stake = Math.floor(Math.random() * (1000 - 30 + 1)) + 30;
    return {
        "stake": stake,
        "vatValue": stake * 0.15,
        "totalOdds": 10,
        "ticketID": `${randomChar()}${randomSixDigitNumber()}`,
        "isPlaced": true,
        "placementID": `${randomChar()}${randomSixDigitNumber()}`,
        "status": status[Math.floor(Math.random() * (2 - 0 + 1)) + 0],
        "placerType": "CUSTOMER",
        "user": "5f46b3e4669b5c001704c61c",
        "shop": null,
        "isExpired": false,
        "createdAt": dates[Math.floor(Math.random() * (4 - 0 + 1)) + 0]
    };
};

export const fake = () => {
    let tickets = [];
    for (let i = 0; i < 100; i++) {
        tickets.push(t());
    }
    writeToFile(JSON.stringify({tickets}));
}