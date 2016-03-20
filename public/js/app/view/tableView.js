define(['jquery', 'backbone.marionette', 'view/tableEntryView', 'template/table.handlebars', 
	'view/tableEmptyView'], 
	function ($, Marionette, TableEntryView, table, TableEmptyView) {
	var TableView = Marionette.CompositeView.extend({
		initialize: function () {
		},
		template: table,  
		childView: TableEntryView,
		childViewContainer: 'tbody',
		emptyView: TableEmptyView,
		collectionEvents: {
			'remove': 'emptyCheck',
			'change': 'changed',
			'add': 'added'
		}, 
		added: function () {
			console.log('added');
		},
		changed: function () {
			console.log('changed');
		},
		emptyCheck: function () {
			console.log(this.collection.length);
			if (this.collection.length === 0){
				this.render();
			}
		}
	});
	return TableView;
});