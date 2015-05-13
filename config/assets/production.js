'use strict';

module.exports = {
	client: {
		lib: {
			css: [
				'public/dist/bootstrap.min.css',
				//'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
                		'public/lib/bootstrap-material-design/dist/css/roboto.min.css',
                		//'public/lib/bootstrap-material-design/dist/css/material.min.css',
                		'public/dist/material.min.css',
                		'public/lib/bootstrap-material-design/dist/css/ripples.min.css',
                		'public/lib/ng-table/ng-table.min.css'
			],
			js: [
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.min.js',
                		'public/lib/angular-cookies/angular-cookies.min.js',
				'public/lib/angular-animate/angular-animate.min.js',
                		'public/lib/angular-touch/angular-touch.min.js',
                		'public/lib/angular-sanitize/angular-sanitize.min.js',
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
                		'//code.jquery.com/jquery-1.10.2.min.js',
                		'public/lib/bootstrap-material-design/dist/js/ripples.min.js',
                		'public/lib/bootstrap-material-design/dist/js/material.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
                		'public/lib/ng-table/dist/ng-table.min.js',
                		'public/lib/api-check/dist/apiCheck.min.js',
                		'public/lib/angular-formly/dist/formly.min.js',
                		'public/lib/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js',
				'public/lib/angular-file-upload/angular-file-upload.min.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	}
};
