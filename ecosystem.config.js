module.exports = {
  apps: [
    {
      name: 'server',
      script: 'npm run serve',
      cwd: './packages/backend',
      watch: true,
      env_production: {
        NODE_ENV: 'production',
        PORT: '3001',
      },
    },
    {
      name: 'nextjs',
      script: 'npm run serve',
      cwd: './packages/frontend',
      watch: true,
      env_production: {
        NODE_ENV: 'production',
        PORT: '8080',
      },
    },
  ],
};