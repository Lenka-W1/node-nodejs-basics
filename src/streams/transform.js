import { stdin, stdout } from 'process';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const string = String(chunk).trim();
    const reverse = string.split('').reverse().join('');

    this.push(reverse + '\n');

    callback();
  }
})

const transform = async () => {
  try {
    await pipeline(stdin, transformStream, stdout);
  }
  catch {
    throw new Error('FS operation failed');
  }
};

await transform();