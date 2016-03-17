define(['jquery', 'backbone.marionette', 'view/tableEntryView', 'template/table.handlebars'], 
	function ($, Marionette, TableEntryView, table) {
	var TableView = Marionette.CompositeView.extend({
		initialize: function () {
		},
		template: table,  
		childView: TableEntryView,
		childViewContainer: 'tbody'
	});
	return TableView;
});