define(['jquery', 'backbone.marionette', 'template/tableEntryEdit.handlebars'], 
	function($, Marionette, tableEntryEditHbs) {
	var EditView = Marionette.ItemView.extend({
		initialize: function () {
		},
		template: tableEntryEditHbs,
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
	return EditView;
});