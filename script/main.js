$(function() {
	var idx_lgth = $("#visual>div").length;
	var srt = 1;

	$("section>a").click(function() {
		var idx = $(this).index();
		srt = idx;
		$(this).addClass('on').siblings().removeClass('on');
		$("#visual>div").eq(idx).addClass('on').siblings().removeClass('on');
	});

	setInterval(AutoRun, 3000);

	function AutoRun() {
		if (srt == idx_lgth) {
			srt = 0;
		}
		$("section>a").eq(srt).addClass('on').siblings().removeClass('on');
		$("#visual>div").eq(srt).addClass('on').siblings().removeClass('on');
		srt++;
	}

		$(document).on("click",".openPopup", function() {
			$("#popup01").show(400, function(){
				$(".backon").removeClass("d-none");
				$(".backon").show();
			});
		});
		$(".btn-apply").on("click", function() {
			alert("지원 완료");
			$("#popup01").hide();
			$(".backon").hide();
		});
		$("body").on("click", function(event) {
			if (event.target.className == "close" || event.target.className == "backon") {
				$("#popup01").hide();
				$(".backon").hide();
			}
		});
})


