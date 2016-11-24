'use strict';

angular.module('theYarnTasselApp')

// home page
  .factory('homeFactory', function(){
    var homefac = {};

    var menu=[
      {
        image: '../images/wool.jpeg',
        legend: 'Craft Ideas'
      },
      {
        image: '../images/supplies.jpg',
        legend: 'Tutorials'
      },
      {
        image: '../images/travel.jpg',
        legend: 'Diary'
      },
      {
        image: '../images/atelier.jpg',
        legend: 'Atelier'
      },
      {
        image: '../images/me.jpg',
        legend: 'About Me'
      },
      {
        image: '../images/logo.png',
        legend: 'Follow on Pinterest'
      }
    ];

    homefac.getMenu = function(){
      return menu;
    };

    homefac.getTab = function(index){
      return menu[index];
    };

    return homefac;

  })
  // end home page


  // tutorial-slides
  .factory('slidesFactory', function() {
    var slidesfac = {};

    var caroussel = [
      {
        image: '../images/slide-img/mittens/step00',
        description: ['Get Started']
      },
      {
        image: '../images/crochet%20hearth%20chain/step1.jpg',
        description: [
          'Start with 3 chains.',
          'LALAL',
          'LALALA',
          'LLA']
      }
    ];

    slidesfac.getSlides = function(){
      return caroussel;
    };





    return tutorialfac;
  })

  .filter('addLineBreaks', function(){
    return function(input){
      input = input|| '';
      var output = input.split('\n');
      return output.join('<br/>');
    }
  })




;
