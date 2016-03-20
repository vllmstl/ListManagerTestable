define(['backbone.marionette', 'template/tableEntryEdit.handlebars'], 
	function (Marionette, tableEntryEditHbs) {
	var EditBehavior = Marionette.Behavior.extend({
		events: {
			'click @ui.editButton': 'editThis'
		},
		editThis: function () {
			this.$el.empty();
			this.$el.append(tableEntryEditHbs(this.view.serializeDataWithCID()));
		}
	});
	return EditBehavior;
});