'use strict';

describe('Home Controller', function() {
    var controller, $controller, $scope, vm, userService, $uibModal;
    beforeEach(module('demo.controllers', 'demo.services'));
    beforeEach(module('ui.bootstrap.modal'));

    beforeEach(inject(function(_$controller_, _$httpBackend_, $rootScope, _userService_, _$uibModal_) {
        $controller = _$controller_;
        userService = _userService_;
        $uibModal = _$uibModal_;
        $scope = $rootScope.$new();

        sinon.spy(userService, 'getUserData');
        // passing permission value which could be true or false
        controller = function() {
            return $controller('HomeCtrl', {
                $scope: $scope
            });
        };
    }));

    describe('Home controller', function() {
        beforeEach(function() {
            vm = controller();
        });

        it('should have expected characterLimit values', function() {
            expect(vm.characterLimit).to.be.eql(30);
        });

        it('should have called userService.getUserData', function() {
            expect(userService.getUserData.calledOnce).to.be.true;
        });

        it('should have expected userHeader length', function() {
            expect(vm.userHeader.length).to.be.eql(4);
        });


        it('should have expected column name and sorting type', function() {
            $scope.changeSorting('id');
            expect($scope.sort.column).to.be.eql('id');
            expect($scope.sort.descending).to.be.eql(false);
        });



    });
});