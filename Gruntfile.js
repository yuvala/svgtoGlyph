module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
        icons: {
            src: 'svgSamples/*.svg',
            dest: 'build/fonts',
            destCss: 'build/css'
            ,
            options: {
                font: 'my-icons',
                stylesheet: 'css',
                syntax: 'bem',
                templateOptions: {
                    baseClass: 'icon',
                    classPrefix: 'ico-'
                },
                htmlDemo: true,
                engine: (grunt.option('engine') || 'fontforge'),

                fontFilename: 'portalIcons'
  
            }
        }
    }
   
  });

 

    grunt.loadNpmTasks('grunt-webfont');
  // Load the plugin that provides the "uglify" task.
//  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
    grunt.registerTask('default', ['webfont']);

};