const fs = require('fs');
const core = require('@actions/core');
const execSync = require('child_process').execSync;

try {
  // check it CycloneDX is installed
  try {
    execSync('cyclonedx-py -h');
  } catch (error) {
    console.log('Installing CycloneDX...');
    let consoleOutput = execSync('pip3 install cyclonedx-bom', { encoding: 'utf-8' });
    console.log(consoleOutput);
  }

  const input = core.getInput('input');
  const output = core.getInput('output');

  console.log('Options:');
  console.log(`  i: ${input}`);
  console.log(`  o: ${output}`);

  let command = `cyclonedx-py -i ${input} -o ${output}`

  console.log(`Running: ${command}`);

  consoleOutput = execSync(command, { encoding: 'utf-8' });
  console.log(consoleOutput);

  console.log('BOM Contents:');
  let bomContents = fs.readFileSync(`${output}`).toString('utf8');
  console.log(bomContents);
} catch (error) {
  core.setFailed(error.message);
}