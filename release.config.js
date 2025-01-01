module.exports = {
    branches: [
        { name: "1.x", range: "1.x", channel: "1.x" },
        { name: "2.x", range: "2.x", channel: "2.x" },
        { name: "3.x", range: "3.x", channel: "3.x" },
        { name: "main" },
        { name: "next", channel: "next" },
    ],
    plugins: [
        '@semantic-release/commit-analyzer', // Analyze commits to determine version
        '@semantic-release/release-notes-generator', // Generate release notes
        '@semantic-release/changelog', // Update CHANGELOG.md
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'composer.json'],
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
};