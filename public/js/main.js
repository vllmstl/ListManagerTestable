(function() {
	'use strict';
	// window.kar  = "1";

	require.config({
		baseUrl: './',
		paths: {
			'backbone': 'lib/js/backbone',
			'handlebars': 'lib/js/handlebars',
			'jquery': 'lib/js/jquery',
			'underscore': 'lib/js/underscore',
			'backbone.wreqr': 'lib/js/backbone.wreqr',
			'backbone.babysitter': 'lib/js/backbone.babysitter',
			'backbone.marionette': 'lib/js/backbone.marionette',
			'handlebars.runtime': 'lib/js/handlebars.runtime',
			'model': 'js/app/model',
			'view': 'js/app/view',
			'collection': 'js/app/collection',
			'router': 'js/app/router',
			'karthik': 'lib/js/karthik',
			'template': 'js/app/template/compiled'
		},
		shim: {
			'karthik': {
				exports: 'Karthik'
			},
			'backbone': {
				// exports: 'Backbone',
				deps: ['underscore', 'jquery']
			},
			// 'underscore': {
			// 	exports: 'underscore'
			// },
			// 'jquery': {
			// 	exports: 'kar'
			// },
			'backbone.marionette': {
				// exports: 'Backbone.Marionette',
				deps: ['backbone', 'backbone.wreqr', 'backbone.babysitter']
			}//,
			// 'backbone.wreqr': {
			// 	exports: 'Backbone.Wreqr'
			// },
			// 'backbone.babysitter': {
			// 	exports: 'Backbone.Babbysitter'
			// }
		}
	});

	// require(['karthik'], function (kk) {
	// 	console.log(kk);
	// });

// 	require(['backbone.marionette', 'karthik'], function (Marionette) {
// 		var App = Marionette.Application.extend({
// 			initialize: function (options) {
// 				console.log(options.msg);
// 			}
// 		});
// 		var myApp = new App({
// 			msg: 'hello'
// 		});	
// 		myApp.on('before:start', function (options) {
// 			options.k = 'new k';
// 		});
// 		myApp.on('start', function (options) {
// 			console.log(options);
// 			console.log('started');
// 		});
// 		myApp.start({});

// 		// //// regions
// 		var Region = Marionette.Region.extend({
// 			el: '#main'
// 		});

// 		/////region manager
// 		var regionManager = new Marionette.RegionManager();
// 		regionManager.addRegions({
// 			mainRegion: {
// 				// selector: '',
// 				regionClass: Region
// 			}
// 		});


// 		////// ListItemView
// 		var LView = Marionette.ItemView.extend({
// 			el: 'p'
// 		});

// 		var lview = new LView();

// 		// doing it in RegionManager
// 		// myApp.addRegion({
// 		// 	mainRegion: {
// 		// 		el: '#main',
// 		// 		regionClass: Region
// 		// 	}
// 		// });

// 		// myApp.mainRegion.show(lview, {});

// 		regionManager.get('mainRegion').show(lview, {});


// 		/////Model
// 		var Model = Backbone.Model.extend({
// 			defaults: {
// 				name: 'name'
// 			}
// 		});
// 		var model = new Model();
// 		console.log(model.get('name'));





// 	});


	require(['view/tableView', 'model/contactModel', 'view/tableEntryView', 'collection/contactsCollection'], 
		function (TableView, ContactModel, TableEntryView, ContactsCollection) {
		var app = new Marionette.Application({
			regions: {
				main: '#main'
			}
		});
		var contactModel = new ContactModel({
			fname: 'fname',
			lname: 'lname'
		});
		var contactsCollection = new ContactsCollection([
			{
			fname: 'fname1',
			lname: 'lname'
		},
		{
			fname: 'fname',
			lname: 'lname'
		},
		{
			fname: 'fname',
			lname: 'lname'
		}]);
		var tableView = new TableView({
			collection: contactsCollection
		});

		// var tableEntryView = new TableEntryView({
		// 	model: contactModel
		// });
		app.main.show(tableView);
		
	});




}())