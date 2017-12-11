'use strict';

describe('UserData Service', function() {
  	var $httpBackend,
        $rootScope,
        userService;

  	beforeEach(function () {
        module('demo.services');
    });

  	beforeEach(inject(function (_$rootScope_, _$httpBackend_, _userService_) {
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        userService = _userService_;
    }));

	describe('positive', function(){
	  	it('should have expected response', function () {
	  		var response = [{id: 1}, {id: 2}];
	  		$httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts').respond(200, response);
	  		var result = userService.getUserData();
	  		$httpBackend.flush();
	  		result.then(function (response) {
	  			expect(response.data).to.include.members(response);
	  		});
        });
  	});

  	describe('negative', function(){
	  	it('should have expected response', function () {
	  		var response = { message: 'Page not found' };
	  		$httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts').respond(404, response);
	  		var result = userService.getUserData();
	  		$httpBackend.flush();
            result.then(function (response) {
	  			expect(response.data).to.include.members(response);
	  		});
        });
  	});
});