const createIssue = require('./lib/git/issues_create')

// main application
module.exports = async ({releaseHandle, releaseName, assignee, token}) => {
  let body = ''

  try {
    body = require('./checklist').getBody(releaseName)
  } catch (e) {
    return new Error(`Checklist has not a proper Markdown format: ${e}`)
  }

  const issue = await createIssue({
    token,
    body,
    assignee,
    releaseHandle
  })
    .catch((e) => {
      return e
    })

  return issue
}
