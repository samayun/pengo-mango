const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const chalk = require("chalk");
const isFileExists = require("./src/isFileExists");

const defaultBoilerplate = "penguin.js";
const boilerplate = process.argv[2] || defaultBoilerplate;

async function PengoMangoCLI() {
  try {
    const cwd = process.cwd();
    if (!(await isFileExists(boilerplate))) {
      throw new Error(
        `[ ] There has no template boilerplate exists named ${boilerplate}`
      );
    }
    const templatePath = path.resolve(`${__dirname}/templates/${boilerplate}`);
    const copyCommend = `cp -al ${templatePath}/. ${cwd}/.`;
    await exec(copyCommend);
    console.log(
      chalk.white.bgGreen.bold(
        `[x] ${boilerplate} Template Scaffolded Successfully`
      )
    );
  } catch (error) {
    console.log(chalk.red(error.message));
  }
}

module.exports = PengoMangoCLI;
