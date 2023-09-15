module.exports = {
    apps: [
        {
            name: 'ltyq-app',
            port: '8004',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
        },
    ],
}
