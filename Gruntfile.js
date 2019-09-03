module.exports = function (grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            sitecss: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    './dist/radia.min.css': [
                        './src/radia.css',
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                './src/radia.js',
                ],
                dest: './dist/radia.min.js'
            }
        }
    });
    grunt.registerTask('default', ['uglify', 'cssmin']);
};
