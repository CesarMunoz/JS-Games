module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      gameIncludes: [ 'source/js/createjs-2013.12.12.min.js' ],
      gameScripts: ['source/js/gameScripts.js'],
      gruntfile: ['Gruntfile.js']
    },

    concat: {
      gameIncludes: {
        src: [ '<%= jshint.gameIncludes %>' ],
        dest: 'publish/js/createjs-2013.12.12.min.js'
      },
      gameScripts: {
        src:[ '<%= jshint.gameScripts %>' ],
        dest: 'publish/js/gameScripts.min.js'
      }
    },

    recess: {
      dev: {
        options: {
          compile: true,
          compress: false
        },
        files: {
          'publish/css/gameStyles.css': ['source/less/gameStyles.less']
        }
      },
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'publish/css/gameStyles.css': ['source/less/gameStyles.less']
        }
      }
    },

    clean: {
      dist:[ 'publish/js/*' ]
    },

    uglify: {
      gameScripts: {
        options: {
          compress: false,
          mangle: false,
          beautify: true
        },
        files: {
          '<%= concat.gameScripts.dest %>': ['<%= concat.gameScripts.src %>']
        }
      },
      gameIncludes: {
        options: {
          compress: false,
          mangle: false,
          beautify: true
        },
        files: {
          '<%= concat.gameIncludes.dest %>': ['<%= concat.gameIncludes.src %>']
        }
      },
      dist: {
        files: {
          '<%= concat.gameScripts.dest %>': ['<%= concat.gameScripts.src %>'],
          '<%= concat.gameIncludes.dest %>': ['<%= concat.gameIncludes.src %>']
        }
      }
    },

    watch: {
      gruntfile: {
        files: ['<%= jshint.gruntfile %>'],
        tasks: ['jshint:gruntfile'] },
      js: {
        files: ['<%= jshint.gameScripts %>'],
        tasks: [
          'concat:gameScripts',
          'jshint:gameScripts',
          'uglify:gameScripts'
        ]
      },
      less: {
        files: [
          'source/less/*.less',
        ],
        tasks: ['recess:dev']
      }
    }
  });

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Register 'grunt dist' tasks to build all assets for distribution
  grunt.registerTask('default', [
    'clean',              // Delete the specified files and directories
    'concat',             // Concatinate js files
    'jshint:gameScripts',  // Run JSHint on source files only
    // 'recess:dev',        // Compile and minify LESS files into CSS
  ]);

  // Register 'grunt dist' tasks to build all assets for distribution
  grunt.registerTask('dist', [
    'clean',              // Delete the specified files and directories
    'concat',             // Concatinate js files
    'jshint:gameScripts',  // Run JSHint on source files only
    // 'recess:dist',        // Compile and minify LESS files into CSS
    'uglify:dist'         // Concat and uglify javadcript files
  ]);
};
