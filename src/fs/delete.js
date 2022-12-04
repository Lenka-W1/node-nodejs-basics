import * as fs from 'fs/promises';

const pathName = 'src/fs/files/fileToRemove.txt'

const remove = async () => {
  try {
    await fs.rm(pathName);
  }
  catch {
    throw new Error('FS operation failed');
  }
};

await remove();