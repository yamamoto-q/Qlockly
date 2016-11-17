module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            dist: {
                files: [{
                    src: ['src/**/*.js'],
                    dest: 'Qlockly/js/',
                    filter: 'isFile',
                    flatten: true,
                    expand: true
                }]
            }
        },
        yuidoc: {
            dist: {
                'name': 'プロジェクト名',
                'description': "プロジェクトの概要",
                'version': 'バージョン指定',
                options: {
                    linkNatives: false,  
                    paths: 'src/',
                    //YUIDocファイルを出力するディレクトリ名を記述
                    outdir: 'yuidocs/'
                }
            }
        }
        /*
        concat: {
            files: {
                // 元ファイルの指定。
                src: ['js/source/*.js'],
                // 出力ファイルの名前・パス指定
                dest: 'js/application.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    // 出力ファイル: 元ファイル
                    'js/application-min.js': 'js/application.js'
                }
            }
        }*/
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.registerTask('default', ['copy']);
};
