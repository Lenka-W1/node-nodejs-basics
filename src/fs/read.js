import * as fs from 'fs';

const files = 'src/fs/files/fileToRead.txt';

const read = async () => {
  fs.readFile(files, 'utf8', (err, data) => {
    if (err) throw new Error('FS operation failed');
    console.log(data);
  });
};

await read();