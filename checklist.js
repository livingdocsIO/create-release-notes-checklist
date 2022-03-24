const getBody = (releaseName) => {
  return `
  **References**
  * [Bug Dashboard](https://github.com/livingdocsIO/livingdocs-planning/projects/56)
  * [Git repo for this checklist](https://github.com/DaRaFF/create-release-notes-checklist)

  **Important Pull Requests / Topics to integrate into the Release**
  * topic (who) [PR](http://link.to.pr)
  
  **Important Dates**
  * release cut: 2021-10-26
  * webinar mail (release cut + ca. 1 week):  [add Date]
  * release notes mail (release cut + ca. 3 - 3,5 weeks):  [add Date]
  * feature webinar (release cut + ca. 3 - 3,5 weeks):  [add Date]
  * dev webinar prep (dev webinar - 1 week):  [add Date]
  * dev webinar (release cut + ca. 3 - 3,5 weeks):  [add Date]

  **Budget**

  * [ ] 8h NZZ maintenance
  * [ ] 8h BLZ
  * [ ] 4h Swisscom SLA
  * [ ] 4h Bluewin SLA
  * [ ] 2h Aschendorff SLA
  * [ ] 2h BMG SLA
  * [ ] 4h SZ SLA

  # Reminder (-3 days before code freeze)
  * [ ] Remind the team about todo's for the release in #announcements
    \`\`\`
    Hey all, the integration week is almost over
        * Please finish your integration work
        * Please review and merge open PR's until monday evening
        * Are there important pull requests/tickets which *MUST* be in the upcoming release? Please contact me, if necessary.
    \`\`\`

  # Release Notes
  To make the process more efficient, it's also possible to start with release notes before the official code freeze.

  * [ ] Read pull requests of the upstream [server](https://github.com/upfrontIO/livingdocs-server/tags)/[editor](https://github.com/upfrontIO/livingdocs-editor/tags), give feedback about quality (changelog, test instructions)
  * [ ] Add new test cases (of the current release) to [Testrail](https://livingdocs.testrail.io/)
    \`\`\`js
    // search for added cypress code to identify some new test cases, e.g.
    git diff origin/release-2020-10 origin/master -- ./cypress
    \`\`\`
  * [ ] Polish/Finish the [release notes](https://github.com/upfrontIO/livingdocs-release-notes)
  * [ ] Ask for help with a release notes review in #announcements
    \`\`\`
    The release notes for \`${releaseName}\` are ready. Please review them carefully, because everybody should know what is part of our release. Also consider that the release-notes are provided to our customers.
    \`\`\`

  # Code Freeze
  * [ ] Ask about state of the pull requests in #announcements
    \`\`\`
    * Today I will create the upstream release branch \`${releaseName}\`.
    * Are there important un-merged pull requests? please contact me.
    \`\`\`
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
  * [ ] Create a new test run in [Testrail](https://livingdocs.testrail.io/) with \`npm run cypress:testrail\` (do \`ENVIRONMENT=cypress livingdocs-server migrate up\` and start server/editor with \`ENVIRONMENT=cypress\`)
  * [ ] Update [rili](https://rili.cluster.livingdocs.io) (add next release to [json](https://github.com/DaRaFF/rili-livingdocs/blob/master/rili.json), update docker hub and deploy it to kube)

  # UX Check
  * [ ] Integrate the latest version from master into service master ([service develop editor version](https://develop.livingdocs.io/version.json) // [service develop server version](https://service-server-develop.livingdocs.io/version)
  * [ ] Inform the UX team based on the latest release notes to check the UX
  \`\`\`
  Reminder: @rawdiggie @Sven Rüf
  The \`${releaseName}\` is installed on https://develop.livingdocs.io/.
  The (unpolished) release notes can be found at <link>.
  Please check if everything is ok regarding UX.
  \`\`\`

  # NZZ 
  * Check if the downstream integration branch of the **PREVIOUS** release are in a correct state
    * [ ] Rebase the downstream integration branch (nzz)
    * [ ] Check and update the integration notes
  * [ ] [Create downstream integration](https://github.com/upfrontIO/team/blob/master/How-We-Work/Release-Process/Details/Integration-Branches.md) branches of the next release for the NZZ (branch name: upstream-release-MMMM-YY) for the [nzz server](https://github.com/nzzdev/livingdocs-api) and [nzz editor](https://github.com/nzzdev/livingdocs-editor)
  * [ ] Update livingdocs-integration.json of the [server](https://github.com/upfrontIO/livingdocs-server/blob/master/livingdocs-integration.json)/[editor](https://github.com/upfrontIO/livingdocs-editor/blob/master/livingdocs-integration.json)/[framework](https://github.com/upfrontIO/livingdocs-framework/blob/master/livingdocs-integration.json)
    * attention: the \`defaultBranch\` in livingdocs-integration.json of the release branch in the framework must be set to the current release after creating the release branch e.g. [example](https://github.com/livingdocsIO/livingdocs-framework/blob/release-2020-05/livingdocs-integration.json#L4)

  # Preparation (for next cycle)

  * [ ] Create release notes template for next release in the documentation
    * move master to subfolder \`${releaseName}\`
    * create new master document (copy from \`${releaseName}\`, because the release-notes-generator does not work properly anymore)
    * change \`excludeFromSearch\` in upcoming release, as soon as the release is officially out!
  * [ ] Create Skeleton for Weekly Demo Slides / Demo Slides / Developer Webinar Slides and post the info to Slack

  # Testing (Upstream)

  * [ ] Test the upstream and set the state to [Testrail](https://livingdocs.testrail.io/)
  * [ ] Add Bugs to the [Bug Dashboard](https://github.com/livingdocsIO/livingdocs-planning/projects/56)


  # Dev Webinar
  
  * [ ] Meinrad: define dev webinar date + create zoom session
  * [ ] Celine: get dev webinar date + zoom link from Meinrad
  * [ ] Celine prepare a "Webinar" mail and sends it to the business customers
  * [ ] Meinrad: Invite group of devs for dev webinar prep session

  # Feature Webinar
  
  * [ ] Gabriel: define feature webinar date + create zoom session
  * [ ] Celine: get dev webinar date + zoom link from Gabriel
  * [ ] Celine prepare a "Webinar" mail and sends it to the business customers

  # Release Communication
  
  * [ ] Inform the team via slack that the release is ready in #announcements (merge release notes too)
  * [ ] communicate release to customers via [Campaign Monitor](https://livingdocsag.createsend.com/)
    * Celine: Makes a text draft in campaign monitor for the release notes based on release notes
    * Celine: Get a list of new Documentation Guides based on the diff between the last 2 release
      * Ralph: create doc diff \`git diff --numstat HEAD 42a518437c1aab00d83bb001b96e117a3173f7d8 -- content/guides\` 
    * Celine: Gets/adds images from Sven for release notes
    * Celine: Get reviews from people if necessary
    * Meinrad: Define a target date when release notes are sent
    * Celine: Send release notes to business customers (campaign monitor list: release-notes-receiver)
  `
}

module.exports = {
  getBody: getBody
}
