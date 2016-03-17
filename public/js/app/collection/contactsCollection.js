define(['backbone', 'model/contactModel'], function (Backbone, ContactModel) {
	var ContactsCollection = Backbone.Collection.extend({
		model: ContactModel
	});
	return ContactsCollection;
});