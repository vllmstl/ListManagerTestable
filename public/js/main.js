(function() {
	'use strict';
	console.log('main.js');
	require.config({
		baseUrl: './',
		paths: {
			'backbone': 'lib/js/backbone',
			'handlebars': 'lib/js/handlebars',
			'jquery': 'lib/js/jquery',
			'underscore': 'lib/js/underscore',
			'handlebars.runtime': 'lib/js/handlebars.runtime',
			'model': 'js/app/model',
			'view': 'js/app/view',
			'collection': 'js/app/collection',
			'router': 'js/app/router'
		}
	});

	require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
		console.log('lodaded deps');
	});
}())