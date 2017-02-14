var $controller;
var mockService;

var newsletter;

describe("Signup", function() {
	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
//???
		mockService = {};
		mockService.getMenuItemAsync = function(shortName) {
			// Need to wrap the return value in a promise.
			$q(function() {
				if (shortName === 'A1')
					resolve; // Need to pack up the menu item.
				else
					reject;
			});
		}

		newsletter = $controller('MenuService', {MenuService : mockService})
	})
	);

	it("Should accept this value", function() {
		waitsFor(newsletter.validateFavorite('A1'));
		expect(newsletter.noSuchFavorite).toBe(false);
	});

	it("Should reject this value", function() {
		waitsFor(newsletter.validateFavorite('Z54'));
		expect(newsletter.noSuchFavorite).toBe(true);
	})
});