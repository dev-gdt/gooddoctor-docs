module.exports = {
    apps: [
        {
            name: 'gooddoctor-docs',
            script: 'npm run serve',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};
