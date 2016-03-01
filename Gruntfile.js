module.exports = function (grunt) {
   
    // Project configuration.
    grunt.initConfig({
        karma: { 
            unit: {
                configFile: 'karma.conf.js'
            }        
        }
    });

    //  任务的插件。
    grunt.loadNpmTasks('grunt-karma');
    // task 
    grunt.registerTask('test', ['karma']);

    //jsdoc
    //grunt.loadNpmTasks('grunt-jsdoc');


    //  监听任务列表
    //  grunt.registerTask('default', ['uglify']);
    //   grunt.registerTask('watch',  [ /* 'less:compile', */ 'cache']);
    //  发布需要prame.js 里面的为测试环境或者为正式环境, 将index.html app 改为r.app
    // 引入单元测试
    // grunt.registerTask('remove', ['clean:files']);
    // grunt.registerTask('publish', ['publish:test']); // 发布任务
    // grunt.registerTask('publish:release', ['clean:files', 'css', 'copy:build', 'shell:release', 'requirejs:build', 'clean:js', 'compress']); // !!!发布正式版本 //会将连接指向压缩后的打包文件同时删除APP 目录
    // grunt.registerTask('publish:test',  ['clean:files', 'copy:build', 'shell:test', 'requirejs:build', 'clean:js', 'compress']); // 发布测试版本

    // grunt.registerTask('optimization', ['requirejs:dev']); // 建立和发布任务一致的压缩文件 ,用来检查和调试

    // grunt.registerTask('build:test', ['copy:test', 'shell:changebaseUrl']);
    // grunt.registerTask('test', [ 'jasmine:requirejs']);  // 确保之前运行过  build:test  // coverage requirejs
    // grunt.registerTask('test2', ['jasmine:coverage']); // 确保之前运行过  build:test  // coverage requirejs
    // // grunt.registerTask('build:pub',  ['requirejs:build']); // 压缩build js文件的任务
    // grunt.registerTask('server', ['connect:default', 'watch' ]);
    // grunt.registerTask('server:rel', ['connect:release']);

    // grunt.registerTask('css', [ 'concat', 'less' , 'cleancomment']); // 压缩或编译LESS css

    // grunt.registerTask('jdc', ['jsdoc']); 
};
//*******work flow*********//
/*
 'build:test' copy resource 时候不能将 r.app 移至test  prame.js 的不同文件名变量覆盖 导致单元测试不通过
 */
