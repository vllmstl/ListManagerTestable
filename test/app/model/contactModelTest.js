define(['pub/model/contactModel'], function (ContactModel) {
	beforeEach(function () {
		var contact = new ContactModel();
	});
	describe('ContactModel', function () {
		it('should be defined', function () {
			expect(contact).toBeDefined();
		});
	});
});