const Thermostat = require("./thermostat");
const readline = require("readline");

const thermostat = new Thermostat();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Select an option:",
});
rl.prompt();

rl.on("line", (answer) => {
  if (answer === "up") {
    thermostat.up();
  } else if (answer === "down") {
    thermostat.down();
  }
  console.log(`Temperature is ${thermostat.getTemperature()}`);
  rl.prompt();
}).on("close", () => {
  console.log("Existing!");
  process.exit(0);
});
