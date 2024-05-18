module.exports = {
    branches: [
        'master'
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/changelog', {changelogFile: 'CHANGELOG.md'}],
        ['@semantic-release/exec', {"prepareCmd": 'npm publish ${nextRelease.version}'}],
        [
            '@semantic-release/git',
            {
                assets: [
                    'package.json',
                    'package-lock.json',
                    'CHANGELOG.md',
                ],
                message: 'chore(release): release ${nextRelease.version}\n\n${nextRelease.notes}',
            },
        ]
    ],
}
