const octokit = require('@octokit/rest')()

module.exports = class Octokit {

  constructor (token) {
    if (token) {
      octokit.authenticate({
        type: 'oauth',
        token: token
      })
    }
  }

  async createIssue ({body, assignee, releaseHandle, releaseName}) {
    return await octokit.issues.create({
      owner: 'livingdocsIO',
      repo: 'livingdocs-planning',
      title: `Release Management Checklist for ${releaseHandle} Release`,
      body: body,
      assignee: assignee,
      labels: ['5']
    })
  }
}
