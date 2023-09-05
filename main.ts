import * as ob from "https://deno.land/x/obsidianlang@v2.3.0.1/main.ts";
import * as obd from "https://deno.land/x/obsidianlang@v2.3.0.1/DetailProcess.ts";
import chalkin from "https://deno.land/x/chalkin@v0.1.3/mod.ts";
import fetchLatestVersion from "./VersionCheck.ts";
const version = "v1.7.0.0";

const latest = await fetchLatestVersion();


if (version !== latest) {
  console.log(chalkin.red(version), " => " + chalkin.green(latest) + ", There is a new version of OBPL, please download it!");
}

const args = Deno.args

if (args.length === 0) {
  console.log("Expected arguments for OBPL cli.")
} else {
  const command = args[0];
  switch (command) {
    case "test":
      break;
    case "run":
      if (args[1] === undefined) {
        throw `Expected file to run!`
      }
      ob.run(args[1]);
      break;
    case "repl":
      if (args[1] !== undefined) {
        throw `Expected no args for repl command!`
      }
      ob.repl();
      break;
    case "detail":
      if (args[1] === undefined) {
        throw `Expected file to detail!`;
      }
      obd.run(args[1]);
      break;
      
    default:
      console.log(`Unknown command: ${command}`);
  }
}
