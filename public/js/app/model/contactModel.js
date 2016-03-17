define(['backbone'], function(Backbone) {
	var ContactMode = Backbone.Model.extend({
		defaults: {
			fname: '',
			lname: '',
			phone: '',
			email: '',
			url: ''
		}
	});	
	return ContactMode;
});