import * as fs from 'fs/promises';

const fileNames = 'src/fs/files';

const list = async () => {
  try {
    const readDir = await fs.readdir(fileNames);

    for (const file of readDir) {
     console.log(file);
    }
  }
  catch {
    throw new Error('FS operation failed');
  }
};

await list();