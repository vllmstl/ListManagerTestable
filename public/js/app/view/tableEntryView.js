define(['jquery', 'backbone.marionette', 'template/tableEntry.handlebars'], 
	function($, Marionette, tableEntryHbs) {
	var TableEntryView = Marionette.ItemView.extend({
		tagName: 'tr',
		initialize: function () {
			// this.bindUIElements();
			// console.log(this.model);
		},
		template: tableEntryHbs,
		ui: {
			editButton: 'a.edit',
			delButton: 'a.delete'
		},
		modelEvents: {
			// 'change': render 
		},
		behaviors: {
			DeleteBehavior: {},
			CustomSerializeDataBehavior: {}
		},
		serializeData: function () {
			// console.log(this);
			// return this.triggerMethod('serializeDataWithCID', {});

			return this.serializeDataWithCID();
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