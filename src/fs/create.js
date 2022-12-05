import * as fs from 'fs';

const pathName = 'src/fs/files/fresh.txt';

const create = async () => {
  fs.writeFile(pathName, 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err) throw new Error('FS operation failed');
  });
}
await create();