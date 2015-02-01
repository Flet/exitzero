#!/usr/bin/env node
var exec = require('child_process').exec

var cmd = process.argv.slice(2).join(' ')

var child = exec(cmd, {
  cwd: process.cwd(),
  env: process.env
})

child.stderr.pipe(process.stderr)
child.stdout.pipe(process.stdout)
