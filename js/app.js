
$( document ).ready(function() {
    var timer;

    $( "#box1" ).hide();
	$( "#r-menu" ).hide();
	$( "#btnplay" ).hide();
	$( "#btnretry" ).hide();

	$("#btnmic").click(function(){
		startrec();
		$( "#box1" ).show();
		$( "#r-menu" ).show();
		$( "#box2" ).hide();
		var time = 120;
		timer = setInterval(function(){ time--; $('#timer').text(time+"  Sec"); }, 1000);
		setTimeout(explode, 5000);	
	});
	
	$("#btnplay").click(function(){
		$("#box1").show();
		$("#r-menu").show();
		$("#box2").hide();
		var time = 120;
		$('#timer').text(time+"  Sec")
		timer = setInterval(function(){ time--; $('#timer').text(time+"  Sec"); }, 1000);
		setTimeout(explode, 5000);
		$(".path").removeClass("off");
		$(".innercircle").removeClass("off");
		$(".outercircle").removeClass("off");
	});
	
	$("#btnretry").click(function(){
		$("#box1").show();
		$("#r-menu").show();
		$("#box2").hide();
		$("#btnplay").hide();
		$("#btnretry").hide();
		var time = 120;
		$('#timer').text(time+"  Sec")
		timer = setInterval(function(){ time--; $('#timer').text(time+"  Sec"); }, 1000);
		setTimeout(explode, 5000);
		$(".path").removeClass("off");
		$(".innercircle").removeClass("off");
		$(".outercircle").removeClass("off");
	});
	
	function explode(){
		$("#btnplay").show();
		$("#btnretry").show();
		clearInterval(timer);
		$(".path").addClass("off");
		$(".innercircle").addClass("off");
		$(".outercircle").addClass("off");
	}
	
});


function startrec(){
	try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
      window.URL = window.URL || window.webkitURL;

      audio_context = new AudioContext;
      __log('Audio context set up.');
      __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
    } catch (e) {
      alert('No web audio support in this browser!');
    }

    navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
      __log('No live audio input: ' + e);
    });
}



