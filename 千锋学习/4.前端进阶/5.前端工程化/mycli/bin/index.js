#! /usr/bin/env node

const { program } = require("commander");

program.option("-f, --framework <framework>", "select framework");
program.option("-d, --dest <dest>", "destination folder");

const examples = {
  create: ["mycli create <project>"],
  config: ["mycli config set <key> <value>", "mycli config get <key>"],
};
program.on("--help", () => {
  console.log("Examples: ");
  Object.keys(examples).forEach((action) => {
    examples[action].forEach((item) => {
      console.log("  " + item);
    });
  });
});

program.parse();
