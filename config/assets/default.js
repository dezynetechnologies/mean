'use strict';

module.exports = {
    client: {
        lib: {
            css: [
                //'public/dist/bootstrap.css',
                'public/lib/bootstrap-sass/assets/stylesheets/mybootstrap.css',
                //'public/lib/bootstrap/dist/css/bootstrap-theme.css',
                'public/lib/bootstrap-material-design/dist/css/roboto.min.css',
                'public/lib/bootstrap-material-design/dist/css/material.min.css',
                //'public/dist/material.css',
                'public/lib/bootstrap-material-design/dist/css/ripples.min.css',
                'public/lib/ng-table/ng-table.min.css'
            ],
            js: [
                'public/lib/angular/angular.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-cookies/angular-cookies.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-touch/angular-touch.js',
                'public/lib/angular-sanitize/angular-sanitize.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js',
                '//code.jquery.com/jquery-1.10.2.min.js',
                'public/lib/bootstrap-material-design/dist/js/ripples.min.js',
                'public/lib/bootstrap-material-design/dist/js/material.min.js',
                'public/lib/angular-ui-utils/ui-utils.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/ng-table/dist/ng-table.min.js',
                'public/lib/api-check/dist/apiCheck.min.js',
                'public/lib/angular-formly/dist/formly.min.js',
                'public/lib/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js',
                'public/lib/angular-file-upload/angular-file-upload.js'
            ],
            tests: ['public/lib/angular-mocks/angular-mocks.js']
        },
        css: [
            'modules/*/client/css/*.css'
        ],
        less: [
            'modules/*/client/less/*.less'
        ],
        sass: [
            'modules/*/client/scss/*.scss'
        ],
        js: [
            'modules/core/client/app/config.js',
            'modules/core/client/app/init.js',
            'modules/*/client/*.js',
            'modules/*/client/**/*.js'
        ],
        views: ['modules/*/client/views/**/*.html']
    },
    server: {
        allJS: ['gruntfile.js', 'server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
        models: 'modules/*/server/models/**/*.js',
        routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
        sockets: 'modules/*/server/sockets/**/*.js',
        config: 'modules/*/server/config/*.js',
        policies: 'modules/*/server/policies/*.js',
        views: 'modules/*/server/views/*.html'
    }
};
