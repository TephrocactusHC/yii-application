;
(function(){
	var counter = new function(){
		var count = 0;
		var time = 0;
	
		function delay(handler, delay){
			if(time) clearTimeout(time);
			time = setTimeout(handler, delay);
		};

		this.add = function(countt){
			count = count + countt;
			delay(function(){count = 0;}, 1000);
			return count;
		};

		$(function(){
			$('[type="submit"]').click(function(){
				count = 0;
			});
		});
	}
	
	function clearBaiduAd(){
		return $("#content_left div[data-click] span:contains('广告')")
			.parents("#content_left div[data-click]")
			.remove()
			.length;
	}

	$(document).bind("DOMNodeInserted", function(){
		var length = clearBaiduAd();
		var count = counter.add(length);
		chrome.runtime.sendMessage(count);
	});
})();