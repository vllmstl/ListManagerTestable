define(['jquery', 'backbone.marionette', 'template/tableEntry.handlebars'], 
	function($, Marionette, tableEntryHbs) {
	var TableEntryView = Marionette.ItemView.extend({
		tagName: 'tr',
		initialize: function () {
			// this.bindUIElements();
		},
		template: tableEntryHbs,
		ui: {
			edit: 'a.edit',
			del: 'a.delete'
		},
		modelEvents: {
			// 'change': render 
		}
		// render: function () {
		// 	// console.log(this.ui.main);
		// 	// console.log(this.model.toJSON());
		// 	var templateData = this.model.toJSON();
		// 	templateData.cid = this.model.cid;
		// 	$el.append(this.template(templateData));
		// 	return this;
		// }
	});
	return TableEntryView;
});