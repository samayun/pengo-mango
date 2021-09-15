const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const chalk = require("chalk");

async function cli() {
  try {
    const cwd = process.cwd();
    const templatePath = path.resolve(`${__dirname}/templates/starter`);
    const copyCommend = `cp -r ${templatePath}/. ${cwd}/.`;
    console.log(copyCommend);
    await exec(copyCommend);
    console.log(chalk.white.bgGreen.bold(`Template Scaffolded Successfully`));
  } catch (error) {
    console.log(chalk.red(`Failed to start template`));
    console.log(chalk.red(error.message));
  }
}

module.exports = cli;
