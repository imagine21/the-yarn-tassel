'use strict';

angular.module('theYarnTasselApp')

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

  });
