module.exports = {
    apps: [
        {
            name: 'gooddoctor-docs',
            script: 'yarn run start -- --port 4004',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};
