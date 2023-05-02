const getBody = (releaseName) => {
  return `
  **References**
  * [Bug Dashboard](https://github.com/livingdocsIO/livingdocs-planning/projects/56)
  * [Git repo for this checklist](https://github.com/DaRaFF/create-release-notes-checklist)

  # Code Freeze
  * [ ] Create a major bump PR (e.g. 12.2.7 -> 12.3.0) to master for the server/editor/framework
    \`\`\`
    // create a bump pr (you don't have to be in the repo folder)
    npx @daraff/create-bump-pr@latest --gh-token=<your-personal-gh-token> --gh-approval-token=<gh-livingdocs-automation-token> --owner=livingdocsio --repo=livingdocs-framework
    \`\`\`
  * [ ] Announce and [create the upstream release branch](https://github.com/upfrontIO/team/blob/master/How-We-Work/Release-Process/Details/Create-Release-Branches.md) for the server/editor/framework
  * [ ] Update the framework version of the upstream editor/server in \`${releaseName}\` branch
    \`\`\`
    // change the framework version in editor/server to the release alias e.g. release-2020-12
    package.json -> "@livingdocs/framework": "release-2020-12"
    // update the package-lock.json
    npm update @livingdocs/framework
    \`\`\` 
  * [ ] [Publish](https://github.com/livingdocsIO/livingdocs-framework/blob/master/packages/sdk-prebuild/DEV-README.md) a new \`@livingdocs/sdk-framework-prebuild\` npm version in the framework in \`${releaseName}\` branch and update the [SDK](https://github.com/livingdocsIO/livingdocs-node-sdk) to the generated version in \`${releaseName}\`
  * [ ] Get a list of new Documentation Guides based on the diff between the last 2 releases and give that info to the Marketing team -> \`git diff origin/master@{"06.12.2022"} origin/master -- ./content/guides\`

  # Release Notes

  * [ ] Switch the release config to the next release [see example commit](https://github.com/livingdocsIO/documentation/commit/45d40c711bd75d38edd35cdfec976bce3eb50ddb) but check if the relase notes document already exist!

  # NZZ 
  * Check if the downstream integration branch of the **PREVIOUS** release are in a correct state
    * [ ] Check and update the integration notes
  * [ ] [Create downstream integration](https://github.com/upfrontIO/team/blob/master/How-We-Work/Release-Process/Details/Integration-Branches.md) branches of the next release for the NZZ (branch name: upstream-release-MMMM-YY) for the [nzz server](https://github.com/nzzdev/livingdocs-api) and [nzz editor](https://github.com/nzzdev/livingdocs-editor)
  * [ ] Update \`defaultBranch\` and \`customBranches\` of livingdocs-integration.json on master of the [server](https://github.com/upfrontIO/livingdocs-server/blob/master/livingdocs-integration.json)/[editor](https://github.com/upfrontIO/livingdocs-editor/blob/master/livingdocs-integration.json)/[framework](https://github.com/upfrontIO/livingdocs-framework/blob/master/livingdocs-integration.json)
  * [ ] Attention: the \`defaultBranch\` in livingdocs-integration.json of the release branch in the framework must be set to the current release after creating the release branch e.g. [example](https://github.com/livingdocsIO/livingdocs-framework/blob/release-2020-05/livingdocs-integration.json#L4)
  `
}

module.exports = {
  getBody: getBody
}
