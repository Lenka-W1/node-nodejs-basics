import * as fs from 'fs';
import { copyFile } from 'fs/promises';
import { readdir } from 'fs/promises';
import { join } from 'path';

const files_copy = 'src/fs/files_copy';
const files = 'src/fs/files';

fs.access(files, (err) => {
  if (err) throw new Error('FS operation failed');
});

const copy = async () => {
  try {
    fs.mkdir(files_copy, (err) => {
      if (err) throw new Error('FS operation failed');
    });

    const readDir = await readdir(files);

    for (const file of readDir) {
      await copyFile(join(files, file), join(files_copy, file))
    }
  } catch (err) {
    if (err) throw err;
  }
};

copy();