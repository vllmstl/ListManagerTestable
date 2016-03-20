define(['jquery', 'backbone.marionette', 'template/tableEntry.handlebars', 'template/tableEntryEdit.handlebars'], 
	function($, Marionette, tableEntryHbs, tableEntryEditHbs) {
	var TableEntryView = Marionette.ItemView.extend({
		tagName: 'tr',
		initialize: function () {
			// this.bindUIElements();
			// console.log(this.model);
		},
		template: tableEntryHbs,
		ui: {
			editButton: 'a.edit',
			delButton: 'a.delete',
			saveButton: 'a.save',
			cancelButton: 'a.cancel'
		},
		modelEvents: {
			// 'change': render 
		},
		behaviors: {
			DeleteBehavior: {},
			EditBehavior: {},
			CancelBehavior: {},
			SaveBehavior: {}
			// CustomSerializeDataBehavior: {}
		},
		serializeData: function () {
			// console.log(this);
			// return this.triggerMethod('serializeDataWithCID', {});

			return this.serializeDataWithCID();
		},
		onDestroy: function () {
			this.model.destroy();
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