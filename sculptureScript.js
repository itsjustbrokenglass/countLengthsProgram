const sculptureList = require('./data.js'); // import data.js
const sculptureListLengths = [


]

for (let i = 0; i < sculptureList.length; i++) {

    const element = sculptureList[i];

    const newObj = {

        name: null,
        artist: null,
        description: null,
        url: null,
        alt: null,

    };

    for (const key in element) {
        newObj[key] = element[key].length
        //console.log(`${key}: ${newObj[key]}`) // formatted printing

    }
    sculptureListLengths.push(newObj);


}

console.log(sculptureListLengths) // full object print