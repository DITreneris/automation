---
name: release-changelog
description: Prepare a SemVer release — bump package.json, move CHANGELOG Unreleased section, tag instructions.
---

# Release and CHANGELOG

## When to use

- User requests a release or version tag `v*`
- Preparing `[Unreleased]` → `## [X.Y.Z]` in CHANGELOG

## Prerequisites

```bash
npm test
```

Must be green before version bump.

## Steps

1. Review [CHANGELOG.md](CHANGELOG.md) `[Unreleased]` — ensure entries are accurate.
2. Choose SemVer version (align with [package.json](package.json)).
3. Move `[Unreleased]` content to:

```markdown
## [X.Y.Z] - YYYY-MM-DD
```

4. Bump `package.json` `"version"` to match.
5. Leave a fresh empty `[Unreleased]` section at top of CHANGELOG.
6. Update [MUST_TODO.md](MUST_TODO.md) if priorities changed.
7. Commit with `[Orchestrator]` prefix.
8. Tag: `git tag vX.Y.Z` (only when user requests).
9. GitHub Release: paste CHANGELOG section for that version.

## May inspect

`CHANGELOG.md`, `package.json`, `MUST_TODO.md`

## May edit

`CHANGELOG.md`, `package.json`

## Do not

- Tag or release with failing `npm test`
- Skip SemVer alignment between CHANGELOG and package.json

## Output format

- New version number
- CHANGELOG diff summary
- Tag command (if applicable)
