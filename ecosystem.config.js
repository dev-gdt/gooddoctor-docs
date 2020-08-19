module.exports = {
    apps: [
        {
            name: 'gooddoctor-docs',
            script: 'npm run start -- --port 4004',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};
