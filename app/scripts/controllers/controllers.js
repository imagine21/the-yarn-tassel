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


  .controller('SlideController', function ($scope) {

    $scope.slides = [
      {image: '../images/crochet%20hearth%20chain/hearthchain.png', description: 'Image 00'},
      {image: '../images/crochet%20hearth%20chain/step1.png', description: 'Image 01'},
      {image: '../images/crochet%20hearth%20chain/step2.png', description: 'Image 02'},
      {image: '../images/crochet%20hearth%20chain/step3.png', description: 'Image 02'},
      {image: '../images/crochet%20hearth%20chain/step4.png', description: 'Image 02'},
      {image: '../images/crochet%20hearth%20chain/step5.png', description: 'Image 02'},
      {image: '../images/crochet%20hearth%20chain/step6.png', description: 'Image 02'},
      {image: '../images/crochet%20hearth%20chain/step7.png', description: 'Image 02'}
    ];

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



  });





