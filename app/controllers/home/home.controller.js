'use strict';

angular.module('demo.controllers', [])
    .controller('HomeCtrl', function(userService, $scope, $timeout, $uibModal) {
        var vm = this;
        vm.characterLimit = 30;
        vm.userHeader = [{
            "title": "userId",

        }, {
            "title": "Id",


        }, {
            "title": "Title"
        }, {
            "title": "Body"
        }];


        $scope.sort = {
            column: '',
            descending: false
        };
        /* sorting function */
        $scope.changeSorting = function(column) {

            var sort = $scope.sort;

            if (sort.column == column) {
                sort.descending = !sort.descending;
            } else {
                sort.column = column;
                sort.descending = false;
            }
        };

        $scope.selectedCls = function(column) {
            return column == $scope.sort.column && 'sort-' + $scope.sort.descending;
        };
        vm.open = function(user) {

            var uibModalInstance = $uibModal.open({
                scope: $scope,
                templateUrl: "controllers/home/userDetail.html",
                controller: function($uibModalInstance) {
                    $scope.user = user;
                    $scope.close = function() {
                        $uibModalInstance.close(false);
                    };
                }

            });

        };

        /* get user info function starts */
        var getUserInfo = function() {
            vm.showSpinner = true;
            var userDataPromise = userService.getUserData();
            userDataPromise.then(function(response) {
                vm.users = response.data;
                vm.showSpinner = false;
                $timeout(function() {
                    vm.userData = response.data;
                }, 2000);
            }, function(error) {

            });
            userDataPromise.catch(function(error) {
                if (error.status == -1) {
                    vm.showSpinner = false;
                    var uibModalInstance = $uibModal.open({
                        scope: $scope,
                        templateUrl: "errorTemplate/errorPage.html",
                        controller: function($uibModalInstance) {

                            $scope.close = function() {
                                $uibModalInstance.close(false);
                            };
                        }

                    });
                }
            });
        };
        getUserInfo();
    });