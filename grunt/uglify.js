module.exports = {
  options: {
        mangle: false,
        compress: true,
        quoteStyle: 3
      },
      dist: {
        files: {
          'js/head.min.js': 'js/head.js',
          'js/scripts.min.js': 'js/scripts.js',
          'js/ie.min.js'     : 'js/ie.js',
        }
      }
};