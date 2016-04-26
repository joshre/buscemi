module.exports = function(grunt) {
    grunt.initConfig({
        conf: {
            js: 'static/**/*.js',
            sass: 'scss/**/*.scss',
            app: 'app',
            icons: 'static/icons',
            appIcons: 'app/icons/',
        },
        clean: {
            icons: {
                src: ["<%= conf.appIcons %>/*"]
            }
        },
        uglify: {
            dist: {
                files: {
                    "app/app.min.js": "<%= conf.js %>"
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compresed',
                    sourcemap: 'none'
                },
                files: {
                    '<%= conf.app %>/main.min.css': 'scss/main.scss',
                }
            }
        },
        cssnano: {
            options: {
                sourcemap: false,
                'postcss-zindex': false,
                'postcss-merge-idents': true,
                'postcss-discard-duplicates': true
            },
            dist: {
                files: {
                    '<%= conf.app %>/main.min.css': '<%= conf.app %>/main.min.css'
                }
            }
        },
        watch: {
            scripts: {
                files: ["<%= conf.js %>"],
                tasks: ["uglify"]
            },
            sass: {
                files: ["<%= conf.sass %>"],
                tasks: ["sass"]
            },
            cssnano: {
                files: ["<%= conf.sass %>"],
                tasks: ["cssnano"]
            },
            svgmin: {
                files: ["<%= conf.iconts %>/*.svg"],
                tasks: ["svgmin:dist"]
            },
            grunticon: {
                files: ["<%= conf.icons %>/optimized/*.svg"],
                tasks: ["grunticon:myIcons", "copy"]
            }
        },
        svgmin: {
            dist: {
                options: {
                    plugins: [{
                        removeXMLProcInst: false
                    }]
                },
                files: [{
                    expand: true,
                    cwd: '<%= conf.icons %>',
                    src: ['*.svg'],
                    dest: '<%= conf.icons %>/optimized'
                }]
            }
        },
        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: '<%= conf.icons %>/optimized',
                    src: ['*.svg'],
                    dest: '<%= conf.icons %>/final'
                }],
                options: {
                    enhanceSVG: true,
                    pngpath: '<%= conf.appIcons %>',
                    compressPNG: true
                }
            }
        },
        copy: {
            icons: {
                expand: true,
                cwd: '<%= conf.icons %>/final/png',
                src: '**',
                dest: '<%= conf.appIcons %>',
                flatten: true,
                filter: 'isFile',
            },
            style: {
                expand: true,
                cwd: '<%= conf.icons %>/final/',
                src: ['*.css'],
                dest: '<%= conf.appIcons %>',
                flatten: true,
                filter: 'isFile',
            },
            js: {
                expand: true,
                cwd: 'static/markdown/files/',
                src: '**',
                dest: 'library/docs/assets/',
                flatten: true,
                filter: 'isFile',
            },
            gruntIconJS: {
                expand: true,
                cwd: '<%= conf.icons %>/final/',
                src: ['grunticon.loader.js'],
                dest: 'static/',
                flatten: true,
                filter: 'isFile',
            },
        },
        notify_hooks: {
            options: {
                enabled: true,
                max_sass_notifications: 0,
                max_pleeease_notifications: 1,
                success: true
            }
        },
    });
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['watch', 'notify_hooks']);
    grunt.registerTask('icons', ['svgmin', 'grunticon', 'clean', 'copy']);
    grunt.registerTask('server', ['uglify', 'sass', 'cssnano', 'svgmin', 'grunticon', 'clean', 'copy']);
    grunt.task.run('notify_hooks');
}