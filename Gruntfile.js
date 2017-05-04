module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'style.css': 'sass/global.scss',      
          'css/dev.style.css': 'sass/global.scss',
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')(),
          require('rucksack-css')({ fallbacks: true })
        ]
      },
      dist: {
        src: 'style.css',
        dest: 'style.css'
      },
      dev: {
        src: 'css/dev.style.css',
        dest: 'css/dev.style.css'
      },
    },
    cssmin: {
      target: {
        files: {
          'style.css': 'style.css'
        }
      }
    },
    concat: {
      dist: {
        src: [
          'js/lib/no-conflict.js',
          'js/lib/skip-navigation.js',
        ],
        dest: 'js/scripts.js'
      },
    },
    jshint: {
      files: [
        'js/scripts.js',
        'js/ie.js',
      ],
      options: {
        scripturl: true,
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
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
    },
    watch: {
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
    },
  });
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsvalidate');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('default', ['jshint','uglify','sass','postcss','concat','cssmin','watch']);
};