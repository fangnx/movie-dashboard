const { writeFile } = require("fs");
const { argv } = require("yargs");

require("dotenv").config();

const environment = argv.environment;
const isProduction = environment === "prod";
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   omdbApiKey: "${process.env.OMDB_API_KEY}",
};
`;

writeFile(targetPath, environmentFileContent, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Environment files have been generated!`);
  }
});
