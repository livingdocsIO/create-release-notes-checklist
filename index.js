const Octokit = require('./octokit')

// main application
module.exports = async ({releaseHandle, releaseName, assignee, token}) => {
  let body = ''
  const o = new Octokit(token)

  try {
    body = require('./checklist').getBody(releaseName)
  } catch (e) {
    return new Error(`Checklist has not a proper Markdown format: ${e}`)
  }

  const issue = await o.createIssue({
    body,
    assignee,
    releaseHandle,
    releaseName
  })
    .catch((e) => {
      return e
    })

  return issue
}
