var fs = require( 'fs' );
var gulp = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )( {
	rename: {
		'gulp-line-ending-corrector': 'lec',
		'gulp-clean-css': 'minify',
	}
} );

global.config = JSON.parse( fs.readFileSync( './gulp/config/config.json' ) );

function getTask( task ) {
	return require( './gulp/tasks/' + task )( gulp, plugins );
}

gulp.task( 'sass', getTask( 'sass' ) );
gulp.task( 'check-text-domain', getTask( 'check-domain' ) );
gulp.task( 'css-rtl', getTask( 'css-rtl' ) );

gulp.task( 'default', [ 'sass' ], function () {
	console.log(config.root.pluginPath + config.root.pluginName + config.sass.watch);
	gulp.watch( config.sass.watch, [ 'sass' ] );
} );
