define(['backbone.marionette', 'template/tableEntry.handlebars'], function (Marionette, tableEntryHbs) {
	var CancelBehavior = Marionette.Behavior.extend({
		events: {
			'click @ui.cancelButton': 'cancel'
		},
		cancel: function () {
			this.$el.empty();
			this.$el.append(tableEntryHbs(this.view.serializeDataWithCID()));
		}
	});
	return CancelBehavior;
});