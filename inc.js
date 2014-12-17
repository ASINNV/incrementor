$(document).ready(function () {
	var count = 0;
	$('.right-circle').click(function () {
		count +=1 ;
		if (count > 1 && count%9 === 0) {
			$('.hoe').show();
		}
		else {
			$('.hoe').hide();
		}
		$('.number').text(count);
	});
	$('.left-circle').click(function () {
		if (count > 0) {
			count -=1 ;
			$('.number').text(count);
		}
		if (count > 1 && count%9 === 0) {
			$('.hoe').show();
		}
		else {
			$('.hoe').hide();
		}
	});
});