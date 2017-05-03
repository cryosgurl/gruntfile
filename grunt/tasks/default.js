module.exports = function(grunt) {
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin', 'watch']); 
};