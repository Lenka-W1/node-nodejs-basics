import * as fs from 'fs';
import { stdout } from 'process';

const stream = fs.createReadStream('src/streams/files/fileToRead.txt', 'utf8');

const read = async () => {
  stream.pipe(stdout);
};

await read();