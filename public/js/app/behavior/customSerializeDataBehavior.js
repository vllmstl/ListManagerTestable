define(['backbone.marionette'], function (Marionette) {
	var CustomSerializeDataBehavior = Marionette.Behavior.extend({
		onSerializeDataWithCID: function () {
			console.log('called serializeDataWithCID');
			var jsonObj = this.view.model.toJSON();	
			jsonObj.cid = this.view.model.cid;
			return jsonObj;
		}
	});

	return CustomSerializeDataBehavior;
});