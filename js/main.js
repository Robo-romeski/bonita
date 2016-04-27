var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true,
    waveColor: 'white',
    progressColor: '#d3165e',
    height: '75',
    fillParent: false
});
wavesurfer.load('audio/magnet.mp3');
wavesurfer.on('ready', function () {
    wavesurfer.play();
});

//      jQuery("a[href='#top']").click(function() {
//   jQuery("html, body").animate({ scrollTop: 0 }, "slow");
//   return false;
// });

// jQuery(window).scroll(function() {

//     if (jQuery(this).scrollTop()> 200)
//      {
//         jQuery('.scrolltop').fadeIn();
//      }
//     else
//      {
//       jQuery('.scrolltop').fadeOut();
//      }
//  });  

// $('.navbar-header button').click(function(event){
//   $('.mini-menu').toggle("slow");
// });