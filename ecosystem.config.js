module.exports = {
  apps: [{
    name: 'hello-api-server',
    script: 'src/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],

  deploy: {
    production: {
      user: 'seonghui',
      host: '35.247.34.197',
      ref: 'origin/master',
      repo: 'https://github.com/SeonghuiChoe/pm2-ecosystem-example.git',
      path: '/home/seonghui/apps',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
