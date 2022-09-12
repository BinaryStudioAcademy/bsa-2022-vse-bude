import fs from 'fs';

export const writeFile = (fileName, data): void => {
  const path = `./prisma/seed/mockData/${fileName}.json`;
  const jsonContent = JSON.stringify(data, null, 4);
  fs.writeFile(path, jsonContent, 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
  });
};
