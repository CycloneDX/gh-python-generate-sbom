> [!NOTE]
> This GitHub Action is considered deprecated.  
> Instead, you may use the underlying tool directly:
> ```yaml      
> - name: Install SBOM tool
>   run: pipx install cyclonedx-bom
> - name: Create SBOM step
>   # see for usage: https://pypi.org/project/cyclonedx-bom/
>   run: cyclonedx-py --help
> ```

----

----

# GitHub action to generate a CycloneDX SBOM for Python

[![Website](https://img.shields.io/badge/https://-cyclonedx.org-blue.svg)](https://cyclonedx.org/)
[![Slack Invite](https://img.shields.io/badge/Slack-Join-blue?logo=slack&labelColor=393939)](https://cyclonedx.org/slack/invite)
[![Group Discussion](https://img.shields.io/badge/discussion-groups.io-blue.svg)](https://groups.io/g/CycloneDX)
[![Twitter](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Follow)](https://twitter.com/CycloneDX_Spec)


## Inputs

### `input`

The path to a pip requirements file, default is "./requirements.txt"

Be sure to quote paths with spaces.

### `output`

Output filename, default is "./bom.xml"

Be sure to quote paths with spaces.

### `format`

Output format, one of "json"/"xml", default is "xml"

## Example usage

```yaml
- name: Generate Python SBOM
  uses: CycloneDX/gh-python-generate-sbom@v2
  with:
    input: ./requirements.txt
    output: ./bom.json
    format: json
```

----

## Internals

This GitHub ation depends on `cyclonedx-bom>=1.4.0,<4`. 
See [`cyclonedx-bom` on PyPI](https://pypi.org/project/cyclonedx-bom/).
