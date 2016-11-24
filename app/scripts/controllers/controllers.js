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
      {image: '../images/slide-img/mittens/step00.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step01.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step02.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step03.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step04.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step05.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step06.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step07.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step08.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step09.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step10.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step11.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step12.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step13.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step14.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step15.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step16.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step17.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step18.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step19.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step20.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step21.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step22.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step23.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step24.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step25.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step26.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step27.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step28.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step29.jpg', description: 'Image 00'},
      {image: '../images/slide-img/mittens/step30.jpg', description: 'Image 00'},

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





