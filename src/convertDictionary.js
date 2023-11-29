const fs = require('fs');

const isWordValid = (word) => /^[a-zA-Z]+$/.test(word) && word.length === 5;
const filePath = 'dictionary.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const words = data.split(/\s+/).map(word => word.trim());
    const filteredWords = words.filter(word => isWordValid(word));

    const jsonFilePath = 'dictionary.json';

    fs.writeFile(jsonFilePath, JSON.stringify(filteredWords, null, 2), (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});