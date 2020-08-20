module.exports = {
    apps: [
        {
            name: 'gooddoctor-docs',
            script: 'npm run start',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};
