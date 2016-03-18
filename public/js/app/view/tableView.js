define(['jquery', 'backbone.marionette', 'view/tableEntryView', 'template/table.handlebars', 
	'view/tableEmptyView'], 
	function ($, Marionette, TableEntryView, table, TableEmptyView) {
	var TableView = Marionette.CompositeView.extend({
		initialize: function () {
		},
		template: table,  
		childView: TableEntryView,
		childViewContainer: 'tbody',
		emptyView: TableEmptyView
	});
	return TableView;
});