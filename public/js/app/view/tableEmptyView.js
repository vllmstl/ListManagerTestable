define(['backbone.marionette','template/tableEmpty.handlebars'], function (Marionette, tableEmpty) {
	var TableEmptyView = Marionette.ItemView.extend({
		template: tableEmpty,
		tagName: 'tr',
		className:'active text-center'
	});
	return TableEmptyView;
});