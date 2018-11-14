#!/usr/bin/env node

const argv = require('yargs')
  .usage('Usage: $0 [options]')
  .demandOption(['release-handle', 'release-name', 'assignee', 'token'])
  .describe('release-handle', 'release handle e.g. release-2018-11')
  .describe('release-name', 'release name e.g. November Release 2018')
  .describe('assignee', 'assigned user to this checklist')
  .describe('token', 'your github token')
  .argv
const run = require('./index')
const {releaseHandle, releaseName, assignee, token} = argv

run({releaseHandle, releaseName, assignee, token})
  .then((issue) => {
    console.log(issue)
  })
