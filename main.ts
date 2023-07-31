import run from "https://deno.land/x/citrinescript_base@v1.1.1-alpha/main.ts";

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
      run(args[1]);
      break;
    default:
      console.log(`Unknown command: ${command}`);
  }
}
