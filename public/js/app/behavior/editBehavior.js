define(['backbone.marionette'], function (Marionette) {
	var EditBehavior = Marionette.Behavior.extend({
		events: {
			'click @ui.editButton': 'editThis'
		},
		editThis: function () {
		}
	});
});