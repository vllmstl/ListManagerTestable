define(['backbone.marionette'], function (Marionette) {
	var DeleteBehavior = Marionette.Behavior.extend({
		events: {
			'click @ui.delButton': 'del'
		},
		del: function () {
			this.view.$el.fadeOut('slow', function () {
				this.view.destroy();
			}.bind(this));
		}
	});	
	return DeleteBehavior;
});