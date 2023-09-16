module.exports = {
    apps: [
        {
            name: 'ltyq-app',
            port: '8004',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                DATABASE_URL: 'mysql://root:root@localhost:3306/nuxt-prisma',
            },
        },
    ],
}
