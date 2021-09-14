const request = require('request-promise')

// https://docs.github.com/en/rest/reference/issues#create-an-issue
//
// @return
module.exports = async ({token, body, assignee, releaseHandle}) => {
  const owner = 'livingdocsIO'
  const repo = 'livingdocs-planning'
  const labels = ['5']
  const title = `Release Management Checklist for ${releaseHandle} Release`

  try {
    return await request({
      method: 'POST',
      uri: `https://api.github.com/repos/${owner}/${repo}/issues`,
      body: {title, body, assignee, labels},
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`,
        'User-Agent': 'Request-Promise'
      },
      json: true
    })
  } catch (error) {
    throw error
  }
}
