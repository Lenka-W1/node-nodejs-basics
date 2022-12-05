import * as fs from 'fs';
import { stdin } from 'process';

const stream = fs.createWriteStream('src/streams/files/fileToWrite.txt', 'utf8');

const write = async () => {
  stdin.pipe(stream);
};

await write();