const Octokit = require('./octokit')
const checklist = require('./checklist')

// main application
module.exports = async ({releaseHandle, releaseName, assignee, token}) => {
  const o = new Octokit(token)

  const issue = await o.createIssue({
    body: checklist.getBody(releaseName),
    assignee,
    releaseHandle,
    releaseName
  })
    .catch((e) => {
      return e
    })

  return issue
}
