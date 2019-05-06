let proxy = require('http-proxy-middleware');
module.exports = function(app) {  
  app.use(proxy('/api/', {
    target: 'http://39.105.204.243:18000/',
    changeOrigin: true,
    pathRewrite: { 
      '^/api/': ''
    }
  }))
};
