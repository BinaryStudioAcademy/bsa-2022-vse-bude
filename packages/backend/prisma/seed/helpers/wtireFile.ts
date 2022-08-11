import fs from 'fs';

export const writeFile = (fileName, data) => {
  const path = `./prisma/seed/mockData/${fileName}.json`;
  const jsonContent = JSON.stringify(data);
  fs.writeFile(path, jsonContent, 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
  });
};
