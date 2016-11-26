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

    var slides = [
      {image: '../images/slide-img/mittens/step00.jpg', description: 'Gather your materials: /n Chunky yarn 5.5mm needle'},
      {image: '../images/slide-img/mittens/step01.jpg', description: 'Start with 3 chains.'},
      {image: '../images/slide-img/mittens/step02.jpg', description: 'Slip stitch to join and form a ring.'},
      {image: '../images/slide-img/mittens/step03.jpg', description: 'Start the next row with 2 chains.'},
      {image: '../images/slide-img/mittens/step04.jpg', description: 'Work a double crochet into the center of the ring.'},
      {image: '../images/slide-img/mittens/step05.jpg', description: 'Complete row 2 with 9 double crochet. In total you should have 10 stitches, 9 double crochet and the initial 2 chains.'},
      {image: '../images/slide-img/mittens/step06.jpg', description: 'Slip stitch to join the row.'},
      {image: '../images/slide-img/mittens/step07.jpg', description: 'Start row 3 with 2 chains.'},
      {image: '../images/slide-img/mittens/step08.jpg', description: 'Work two double crochet into each previous stitch. The initial 2 chains should be accounted for, so you should have 19 x double crochet and one last double crochet into the bottom of the 2 chain.'},
      {image: '../images/slide-img/mittens/step09.jpg', description: 'Image 09'},
      {image: '../images/slide-img/mittens/step10.jpg', description: 'Image 10'},
      {image: '../images/slide-img/mittens/step11.jpg', description: 'Image 11'},
      {image: '../images/slide-img/mittens/step12.jpg', description: 'Image 12'},
      {image: '../images/slide-img/mittens/step13.jpg', description: 'Image 13'},
      {image: '../images/slide-img/mittens/step14.jpg', description: 'Image 14'},
      {image: '../images/slide-img/mittens/step15.jpg', description: 'Image 15'},
      {image: '../images/slide-img/mittens/step16.jpg', description: 'Image 16'},
      {image: '../images/slide-img/mittens/step17.jpg', description: 'Image 17'},
      {image: '../images/slide-img/mittens/step18.jpg', description: 'Image 18'},
      {image: '../images/slide-img/mittens/step19.jpg', description: 'Image 19'},
      {image: '../images/slide-img/mittens/step20.jpg', description: 'Image 20'},
      {image: '../images/slide-img/mittens/step21.jpg', description: 'Image 21'},
      {image: '../images/slide-img/mittens/step22.jpg', description: 'Image 22'},
      {image: '../images/slide-img/mittens/step23.jpg', description: 'Image 23'},
      {image: '../images/slide-img/mittens/step24.jpg', description: 'Image 24'},
      {image: '../images/slide-img/mittens/step25.jpg', description: 'Image 25'},
      {image: '../images/slide-img/mittens/step26.jpg', description: 'Image 26'},
      {image: '../images/slide-img/mittens/step27.jpg', description: 'Image 27'},
      {image: '../images/slide-img/mittens/step28.jpg', description: 'Image 28'},
      {image: '../images/slide-img/mittens/step29.jpg', description: 'Image 29'},
      {image: '../images/slide-img/mittens/step30.jpg', description: 'Image 30'}

    ];

    slidesfac.getSlides = function(){
      return slides;
    };





    return slidesfac;
  })

  .filter('addLineBreaks', function(){
    return function(input){
      input = input|| '';
      var output = input.split('\n');
      return output.join('<br/>');
    }
  })




;
