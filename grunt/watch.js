module.exports = {
  scripts: {
        files: ['js/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'postcss', 'cssmin']
      }
};