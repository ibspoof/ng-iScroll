/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		
		lint: {
			files: ['grunt.js', 'src/ng-iscroll.js']
		},

		min: {
			dist: {
				src: ['src/ng-iscroll.js'],
				dest: 'src/ng-iscroll.min.js'
			}
		},

		uglify: {
			options: {
				mangle: false
			}
		}
	
	});

	// Register tasks.
	grunt.registerTask('default', 'lint min');
};
