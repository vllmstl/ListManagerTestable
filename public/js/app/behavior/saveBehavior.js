define(['backbone.marionette', 'template/tableEntry.handlebars'], function (Marionette, tableEntryHbs) {
	var SaveBehavior = Marionette.Behavior.extend({
		events: {
			'click @ui.saveButton': 'saveIt'
		},
		saveIt: function () {
			this.view.model.set({
				fname: this.$el.find('.fname').val(),
				lname: this.$el.find('.lname').val(),
				phone: this.$el.find('.phone').val(),
				email: this.$el.find('.email').val(),
				url: this.$el.find('.url').val()
			}, {
				validate: true
			});
			this.$el.empty();
			this.$el.append(tableEntryHbs(this.view.serializeDataWithCID()));
		}
	});
	return SaveBehavior;
});