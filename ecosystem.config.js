module.exports = {
    apps: [
        {
            name: 'ltyq-app',
            port: '8004',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                // 数据库
                DATABASE_URL: 'mysql://root:root@localhost:3306/nuxt-prisma',
                // # 文件上传主机地址
                NUXT_UPLOAD_HOST: 'http://localhost:9008',
                // # 文件上传保存路径
                NUXT_UPLOAD_DIR: '/public/upload',
            },
        },
    ],
}
