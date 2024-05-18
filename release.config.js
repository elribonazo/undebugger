module.exports = {
    branches: [
        'main'
    ],
    repositoryUrl: 'git@github.com:elribonazo/undebugger.git',  // Ensure the repository URL is set
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
    verifyConditions: [
        '@semantic-release/changelog',
        '@semantic-release/git',
        '@semantic-release/github',
        '@semantic-release/npm'
    ],
    prepare: [
        {
            path: '@semantic-release/changelog',
            changelogFile: 'CHANGELOG.md'
        },
        {
            path: '@semantic-release/npm',
            npmPublish: true
        },
        {
            path: '@semantic-release/git',
            assets: [
                'package.json',
                'package-lock.json',
                'CHANGELOG.md'
            ],
            message: 'chore(release): release ${nextRelease.version}\n\n${nextRelease.notes} [skip ci]'
        }
    ],
    publish: [
        '@semantic-release/github',
        '@semantic-release/npm'
    ],
    success: [
        {
            path: '@semantic-release/github',
            successComment: false,
            releasedLabels: false,
        }
    ],
    fail: [
        {
            path: '@semantic-release/github',
            failTitle: 'Release failed for ${nextRelease.version}',
            failComment: false,
        }
    ]
};
