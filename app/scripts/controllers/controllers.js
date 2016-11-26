'use strict';

/**
 * @ngdoc function
 * @name theYarnTasselApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theYarnTasselApp
 */


angular.module('theYarnTasselApp')
  .controller('HomeController', ['$scope', 'homeFactory', function ($scope, homeFactory) {

    var menu= homeFactory.getMenu();

    function chunk(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }

    $scope.chunkedMenu = chunk(menu, 3);

  }])


  .controller('SlideController', ['$scope', 'slidesFactory', function ($scope, slidesFactory) {

    $scope.slides = slidesFactory.getSlides();
    $scope.date = "24 Nov 2016";
    $scope.title = "Chunky Mittens";
    $scope.category = "C R O C H E T";

    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function (index) {
      $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
    };

    $scope.nextSlide = function () {
      // $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
      if ($scope.currentIndex < $scope.slides.length - 1) {
        $scope.currentIndex = $scope.currentIndex + 1;
      } else {
        $scope.currentIndex = 0;
      }
    };
    $scope.prevSlide = function () {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };



  }]);





