[![Website](https://img.shields.io/badge/https://-cyclonedx.org-blue.svg)](https://cyclonedx.org/)
[![Slack Invite](https://img.shields.io/badge/Slack-Join-blue?logo=slack&labelColor=393939)](https://cyclonedx.org/slack/invite)
[![Group Discussion](https://img.shields.io/badge/discussion-groups.io-blue.svg)](https://groups.io/g/CycloneDX)
[![Twitter](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Follow)](https://twitter.com/CycloneDX_Spec)

# GitHub action to generate a CycloneDX SBOM for Python

## Inputs

### `input`

The path to a pip requirements file, default is "./requirements.txt"

Be sure to quote paths with spaces.

### `output`

Output filename, default is "./bom.xml"

Be sure to quote paths with spaces.

### `format`

Output format, default is `xml`.

Acceptable values are `xml` or `json`.

## Example usage

```
- name: Generate Python SBOM
  uses: CycloneDX/gh-python-generate-sbom@v1
    with:
      input: ./requirements.txt
      output: ./bom.json
      format: json
```
