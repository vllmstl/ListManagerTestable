define(['jquery', 'backbone.marionette', 'template/tableEntry.handlebars'], 
	function($, Marionette, tableEntryHbs) {
	var DisplayView = Marionette.ItemView.extend({
		initialize: function () {
		},
		template: tableEntryHbs,
		ui: {
			editButton: 'a.edit',
			delButton: 'a.delete'
		},
		modelEvents: {
		},
		behaviors: {
			DeleteBehavior: {},
			CustomSerializeDataBehavior: {}
		},
		serializeData: function () {
			return this.serializeDataWithCID();
		}
	});
	return DisplayView;
});