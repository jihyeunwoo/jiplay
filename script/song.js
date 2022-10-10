var audio = new Audio("../music/IU-Coin.mp3");
var audio1 = new Audio("../music/Crush-RushHour.mp3");
var audio2 = new Audio("../music/NewJeans-Cookie.mp3");
var audio3 = new Audio("../music/ZionT-turnhorse.mp3");
audio.volume = 0.1;
/*audio.autoplay = true;*/
$(document).ready( function () {
 	$('.music-card').removeClass('playing');
	$('.music-card').removeClass('playing1');
	$('.music-card').removeClass('playing2');
 	$('.music-card').removeClass('playing3');
});
$('.trigger').click(function() {
  if (audio.paused == false) {
      audio.pause();
      $('.fa-pause').show();
      $('.fa-play').hide();
      $('.music-card').removeClass('playing');
  } else {
      audio.play();
      audio1.pause();
	  audio2.pause();
	  audio3.pause();
      $('.fa-play').show();
      $('.fa-pause').hide();
      $('.music-card').addClass('playing');
      $('.music-card').removeClass('playing1');
      $('.music-card').removeClass('playing2');
      $('.music-card').removeClass('playing3');
  }
});
$('.trigger1').click(function() {
  if (audio1.paused == false) {
      audio1.pause();
      $('.fa-pause1').show();
      $('.fa-play1').hide();
      $('.music-card').removeClass('playing1');
  } else {
	  audio.pause();
	  audio2.pause();
	  audio3.pause();
      audio1.play();
      $('.fa-play1').show();
      $('.fa-pause1').hide();
      $('.music-card').addClass('playing1');
      $('.music-card').removeClass('playing');
      $('.music-card').removeClass('playing2');
      $('.music-card').removeClass('playing3');
  }
});
$('.trigger2').click(function() {
  if (audio2.paused == false) {
      audio2.pause();
      $('.fa-pause2').show();
      $('.fa-play2').hide();
      $('.music-card').removeClass('playing2');
  } else {
	  audio.pause();
	  audio1.pause();
	  audio3.pause();
      audio2.play();
      $('.fa-play2').show();
      $('.fa-pause2').hide();
      
      $('.music-card').addClass('playing2');
      $('.music-card').removeClass('playing');
      $('.music-card').removeClass('playing1');
      $('.music-card').removeClass('playing3');
  }
});
$('.trigger3').click(function() {
  if (audio3.paused == false) {
      audio3.pause();
      $('.fa-pause3').show();
      $('.fa-play3').hide();
      $('.music-card').removeClass('playing3');
  } else {
	  audio.pause();
	  audio1.pause();
	  audio2.pause();
      audio3.play();
      $('.fa-play3').show();
      $('.fa-pause3').hide();
      $('.music-card').removeClass('playing');
      $('.music-card').removeClass('playing1');
      $('.music-card').removeClass('playing2');
      $('.music-card').addClass('playing3');
  }
});