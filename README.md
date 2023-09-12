[![Website](https://img.shields.io/badge/https://-cyclonedx.org-blue.svg)](https://cyclonedx.org/)
[![Slack Invite](https://img.shields.io/badge/Slack-Join-blue?logo=slack&labelColor=393939)](https://cyclonedx.org/slack/invite)
[![Group Discussion](https://img.shields.io/badge/discussion-groups.io-blue.svg)](https://groups.io/g/CycloneDX)
[![Twitter](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Follow)](https://twitter.com/CycloneDX_Spec)

# GitHub action to generate a CycloneDX SBOM for Python

## Inputs

### `i`

The path to a pip requirements file, default is "./requirements.txt"

Be sure to quote paths with spaces.

### `o`

Output filename, default is "./bom.xml"

Be sure to quote paths with spaces.

## Example usage

```
uses: CycloneDX/gh-python-generate-sbom@v1
```
