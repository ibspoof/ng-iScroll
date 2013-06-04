/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		
		jshint: {
			files: ['Gruntfile.js', 'src/ng-iscroll.js']
		},

        uglify: {
			options: {
				mangle: false,
                preserveComments: 'some'
			},
            target: {
                files: {
                    'src/ng-iscroll.min.js': ['src/ng-iscroll.js']
                }
            }
		}
	
	});

    // load Plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	// Register tasks.
	grunt.registerTask('default', ['jshint','uglify']);
};
