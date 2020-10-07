import {readSync, writeSync} from "clipboardy";
import {writeJsonResults} from "./utils/write-json-results";

const start = async () => {
  console.log("From your clipboard:", readSync());
  console.log("ENV", process.env.SOME_VARIABLE);

  await writeJsonResults("test.json", {foo: "bar"});

  writeSync("To your clipboard");
};

start();
