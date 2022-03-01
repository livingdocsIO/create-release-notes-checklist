# Scope

Create a release notes checklist for Livingdocs.

# Example

### via CLI

```bash
npx daraff/create-release-notes-checklist#master \
  --release-handle='release-2018-11' \
  --release-name='November Release 2018' \
  --assignee='DaRaFF' \
  --token=<your-gh-token>
```

# Create a new version on npm

🔥 Every time when you change something, you need to do these steps:
- `GH_TOKEN=... npm run semantic-release` (pushes a new version to npm)
- Ignore git tags, they are not relevant
