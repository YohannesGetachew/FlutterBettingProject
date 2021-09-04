import * as fs from 'fs';
import * as path from 'path';
function getDataFromFile(filename) {
    //  return JSON.parse(fs.readFileSync(path.join(__dirname + '../../../src/seed/data', filename), 'utf-8'));
    return JSON.parse(fs.readFileSync(path.join(__dirname + '../../../src/seed', filename), 'utf-8'));
}
const writeToFile = (data) => {
    fs.writeFileSync(path.join(__dirname + '../../../src/seed/data', "tops.json"), data);
}

const tops = () => {
    console.log("Creating...");
    const rawData = getDataFromFile('raw.json');
    const tops = [];
    console.log(rawData.length);
    // rawData[0].data.mainEventList.map(sport => {
    //     sport.competitions.forEach((competition) => {
    //         const d = {
    //             country: competition.country,
    //             league: competition.competitionName
    //         };
    //         if(!tops.includes(d)) {
    //             tops.push(d);
    //         }
    //     })
    // });
    // writeToFile(JSON.stringify({tops}));
}
export default tops;