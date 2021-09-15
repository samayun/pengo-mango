const fs = require("fs");
const { resolve } = require("path");

module.exports = async (file) => {
  try {
    const boilerplatePath = resolve(__dirname, "../templates", file);
    return fs.existsSync(boilerplatePath);
  } catch (error) {
    throw new Error(`Failed to start template ${file}`);
  }
};
