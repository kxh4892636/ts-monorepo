module.exports = {
  apps: [
    {
      name: 'express-demo',
      script: './dist/main.js',
      cwd: './',
      node_args: '--experimental-specifier-resolution=node',
      error_file: './log/app-err.log',
      out_file: './log/app-out.log',
      merge_logs: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
