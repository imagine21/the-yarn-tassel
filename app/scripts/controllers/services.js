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
      {image: '../images/slide-img/mittens/step08.jpg', description: 'Work two double crochet into each previous stitch. The initial 2 chains should be accounted for, so you should have 18 x double crochet and one last double crochet into the bottom of the 2 chain. At the end of this row you should have a total of 20 stitches.'},
      {image: '../images/slide-img/mittens/step09.jpg', description: 'Slip stitch to join the row.'},
      {image: '../images/slide-img/mittens/step10.jpg', description: 'Complete row 4 with a single double crochet in each stitch.'},
      {image: '../images/slide-img/mittens/step11.jpg', description: 'Complete row 5 with a single double crochet in each stitch.'},
      {image: '../images/slide-img/mittens/step12.jpg', description: 'In row 6 we want to increase the mitten width. Work four single double crochet followed by two double crochet in the same stitch. Repeat 4 x to complete the row.'},
      {image: '../images/slide-img/mittens/step13.jpg', description: 'For row 7 and 8 work a single double crochet in each stitch.'},
      {image: '../images/slide-img/mittens/step14.jpg', description: 'Start row 9 with 2 chains followed by 11 double crochet.'},
      {image: '../images/slide-img/mittens/step15.jpg', description: 'At this step we want to create a whole for the thumb. Work 4 chains, skip 2 stitches and work a double crochet in the next stitch. Complete the row with double crochet.'},
      {image: '../images/slide-img/mittens/step16.jpg', description: 'Work row 10 and 11 with a single double crochet in each stitch.'},
      {image: '../images/slide-img/mittens/step17.jpg', description: 'At row 12 we want to start to decrease the width of the mitten again. After the initial 2 chain crochet work a decrease double stitch.'},
      {image: '../images/slide-img/mittens/step18.jpg', description: 'Continue row 12 with 10 double crochet and then another decrease double stitch. Finish the row with double crochet.'},
      {image: '../images/slide-img/mittens/step19.jpg', description: 'We now want to create an elastic texture. Start with 2 chains and a back post double crochet.'},
      {image: '../images/slide-img/mittens/step20.jpg', description: 'Next work two front post double crochet, two back post double crochet, and so on.'},
      {image: '../images/slide-img/mittens/step21.jpg', description: 'Add two more rows with back and front post double crochet.'},
      {image: '../images/slide-img/mittens/step22.jpg', description: 'To create the thumb, join yarn at a stitch close to upper hand'},
      {image: '../images/slide-img/mittens/step23.jpg', description: 'Work 2 chain.'},
      {image: '../images/slide-img/mittens/step24.jpg', description: 'Work around the thumb with 11 double crochet and 1 decrease double stitch.'},
      {image: '../images/slide-img/mittens/step25.jpg', description: 'Repeat previous round, this time you should have 10 double crochet and 1 decrease double stitch.'},
      {image: '../images/slide-img/mittens/step26.jpg', description: 'Keep decreasing the width of the thumb, work 2 chains, 3 double crochet, 1 decrease double stitch, 3 double crochet, 1 decrease double stitch.'},
      {image: '../images/slide-img/mittens/step27.jpg', description: 'Finish the length of the thumb with 2 chains, 3 double crochet, 1 decrease double stitch, 2 double crochet, 1 decrease double stitch.'},
      {image: '../images/slide-img/mittens/step28.jpg', description: ' Because the yarn is chunky, finish joining the endings of the top row with 2 slip stitch. Pull the yarn inside.'}

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
