import * as ces from "https://deno.land/x/citrinescript_base@v1.3.1.1/main.ts";
import fetchLatestVersion from "./VersionCheck.ts";
const version = "v1.3.0.1";

const latest = await fetchLatestVersion();


if (version !== latest) {
  console.log(version, " => " + latest + ", There is a new version of citrin, please download it!");
}

const args = Deno.args

if (args.length === 0) {
  console.log("Expected arguments for citrin cli.")
} else {
  const command = args[0];
  switch (command) {
    case "test":
      break;
    case "run":
      if (args[1] === undefined) {
        throw `Expected file to run!`
      }
      ces.run(args[1]);
      break;
    case "repl":
      if (args[1] !== undefined) {
        throw `Expected no args for repl command!`
      }
      ces.repl();
      break;
    default:
      console.log(`Unknown command: ${command}`);
  }
}
