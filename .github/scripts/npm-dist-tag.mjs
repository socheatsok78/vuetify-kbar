#!/usr/bin/env zx

const packagejson = require('../../package.json')

if (packagejson.publishConfig && packagejson.publishConfig.tag) {
  const packageName = `${packagejson.name}@${packagejson.version}`
  const tag = packagejson.publishConfig.tag

  await $`npm dist-tag add ${packageName} ${tag}`
}
