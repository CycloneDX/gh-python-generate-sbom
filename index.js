// This file is part of CycloneDX GitHub Action for Python
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0
// Copyright (c) Patrick Dwyer. All Rights Reserved.

const fs = require('fs');
const core = require('@actions/core');
const execSync = require('child_process').execSync;

try {
  // check if CycloneDX is installed
  try {
    execSync('cyclonedx-py -h');
  } catch (error) {
    console.log('Installing CycloneDX...');
    let consoleOutput = execSync("pip3 install 'cyclonedx-bom>=1.4.0,<4'", { encoding: 'utf-8' });
    console.log(consoleOutput);
  }

  const input = core.getInput('input');
  const output = core.getInput('output');
  const format = core.getInput('format');

  console.log('Options:');
  console.log(`  input:  ${input}`);
  console.log(`  output: ${output}`);
  console.log(`  format: ${format}`);

  let command = `cyclonedx-py -r -i ${input} --format ${format} -o ${output}`

  console.log(`Running: ${command}`);

  consoleOutput = execSync(command, { encoding: 'utf-8' });
  console.log(consoleOutput);

  console.log('BOM Contents:');
  let bomContents = fs.readFileSync(`${output}`).toString('utf8');
  console.log(bomContents);
} catch (error) {
  core.setFailed(error.message);
}
