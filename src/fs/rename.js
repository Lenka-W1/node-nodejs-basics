import * as fs from 'fs/promises';

const oldFile = 'src/fs/files/wrongFilename.txt';
const newFile = 'src/fs/files/properFilename.md';

const rename = async () => {
  try {
    await fs.rename(oldFile, newFile);
  }
  catch {
    throw new Error('FS operation failed');
  }
};

await rename();