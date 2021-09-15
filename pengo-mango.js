const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const chalk = require("chalk");

async function PengoMangoCLI() {
  try {
    const cwd = process.cwd();
    const boilerplate = "penguin.js";
    const templatePath = path.resolve(`${__dirname}/templates/${boilerplate}`);
    const copyCommend = `cp -al ${templatePath}/. ${cwd}/.`;
    await exec(copyCommend);
    console.log(chalk.white.bgGreen.bold(`Template Scaffolded Successfully`));
  } catch (error) {
    console.log(chalk.red(`Failed to start template`));
    console.log(chalk.red(error.message));
  }
}

module.exports = PengoMangoCLI;
