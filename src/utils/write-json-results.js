import {writeFile} from "jsonfile";

import fs from "fs";
import path from "path";

const dir = path.join(process.env.PWD, "results");

export const writeJsonResults = async (file, data) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  await writeFile(
    path.join(dir, file),
    data,
    {spsaces: 2},
  );
};
