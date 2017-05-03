module.exports = {
	
uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/magic.min.js': ['src/js/magic.js', 'src/js/magic2.js']
        }
      }
    }
};