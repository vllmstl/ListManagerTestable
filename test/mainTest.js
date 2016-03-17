(function () {
	'use strict';

	require.config({
		paths: {
			pub: '../public/js/app',
			test: '../test/app',
			jasmine: 'lib/jasmine-2.4.1/jasmine',
			'jasmine-html': 'lib/jasmine-2.4.1/jasmine-html',
			'jasmine-boot': 'lib/jasmine-2.4.1/boot'
		},
		shim: {
		    'jasmine-html': {
		      deps : ['jasmine']
		    },
		    'jasmine-boot': {
		      deps : ['jasmine', 'jasmine-html']
		    }
		  }
	});

	require(['jasmine-boot'], function () {
		require(['test/model/contactModelTest'], function () {
			window.onload();
		}); 
	});

})();

